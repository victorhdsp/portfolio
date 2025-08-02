export interface Post {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  image: string | null;
  tags: string[];
}

export interface FullPost {
  id: string;
  title: string;
  slug: string;
  image: string | null;
  content: string;
}