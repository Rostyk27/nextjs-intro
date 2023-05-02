import { getAllPosts } from '../../../lib/cms';
import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  const currentPost = posts.filter(post => post.slug === slug);
  return currentPost[0];
}

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function SinglePost({ params }: PostProps) {
  const post = await getPostBySlug(params.slug[0]);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <h3>
        Slug "{post.slug}" got from `params` because folder name is [slug]
      </h3>
      <p>{post.body}</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
