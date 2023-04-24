import Link from 'next/link';
import { getAllPosts } from '../../lib/cms';

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="container">
      <h1>Blog</h1>
      <Link href="/">Back home</Link>

      <div>
        {posts.map(post => (
          <article key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
