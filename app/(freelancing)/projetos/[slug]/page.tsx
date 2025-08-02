import { getPosts, getPostBySlug } from "@/lib/notion";
import ReadMarkdown from "@/sources/pages/projects/readMarkdown";
import Button from "@/sources/shared/components/button";
import { FullPost } from "@/types/notion";
import { SendIcon } from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // ISR a cada 1 min

interface BlogPostProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post: FullPost | null = await getPostBySlug(params.slug);
  if (!post) return <h1 className="prose">Post não encontrado</h1>;

  return (
    <div className="w-full py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <article className="prose prose-pre:bg-slate-100 prose-pre:text-black mx-auto w-full">
        <h1>{post.title}</h1>
        {post.image && 
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={600}
        />}
        <ReadMarkdown markdown={post.content} />
        <Link href="/#contact">
          <Button
            type='button'
            leftIcon={<SendIcon />}
          >
            Entrar em contato
          </Button>
        </Link>
      </article>
    </div>
  );
}
