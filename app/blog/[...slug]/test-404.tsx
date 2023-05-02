// to use 404 page we need to import notFound function and call it in page.tsx

// import { notFound } from 'next/navigation';
// if (!post) {
// notFound();
// }

// if we want to have a custom 404 page we should create a file with name not-found.tsx in the same folder as page.tsx, otherwise we will get a default 404 page

import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div className="container">
      <h1>Oh! This post could not be found</h1>
      <Link href="/">Back Home</Link>
    </div>
  );
}
