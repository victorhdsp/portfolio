import { Client, PageObjectResponse } from "@notionhq/client";
import { Post, FullPost } from "@/types/notion";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPosts(): Promise<Post[]> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
  });

  return response.results.map((_post) => {
    const post = _post as PageObjectResponse;
    let title = "";
    let subtitle = "";
    let slug = "";
    let description = "";
    let image = null;
    let tags: string[] = [];

    if (post.properties.Title.type === "title") {
      title = post.properties.Title.title[0].plain_text;
    }
    if (post.properties.Subtitle.type === "rich_text") {
      subtitle = post.properties.Subtitle.rich_text[0].plain_text;
    }
    if (post.properties.Slug.type === "rich_text") {
      slug = post.properties.Slug.rich_text[0].plain_text;
    }
    if (post.properties.Description.type === "rich_text") {
      description = post.properties.Description.rich_text[0].plain_text;
    }
    
    if (post.cover?.type === "external") {
      image = post.cover.external.url;
    } else if (post.cover?.type === "file") {
      image = post.cover.file.url;
    }
    
    if (post.properties.Tags.type === "multi_select") {
      tags = post.properties.Tags.multi_select.map((tag) => tag.name);
    }

    return {
      id: post.id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      description: description,
      image: image,
      tags: tags,
    }
  });
}

export async function getPostBySlug(_slug: string): Promise<FullPost | null> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: { equals: _slug },
    },
  });

  if (!response.results.length) return null;

  const page = response.results[0] as PageObjectResponse;
  const pageId = page.id;
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);

  let title = "";
  if (page.properties.Title.type === "title") {
    title = page.properties.Title.title[0].plain_text;
  }

  let slug = "";
  if (page.properties.Slug.type === "rich_text") {
    slug = page.properties.Slug.rich_text[0].plain_text;
  }
  
  let image = null;
  if (page.cover?.type === "external") {
    image = page.cover.external.url;
  } else if (page.cover?.type === "file") {
    image = page.cover.file.url;
  }
  
  return {
    id: page.id,
    title: title,
    image: image,
    slug: slug,
    content: mdString.parent,
  };
}
