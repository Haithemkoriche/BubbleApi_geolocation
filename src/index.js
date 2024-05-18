// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is the homepage of my Next.js application.</p>
      </main>

      <footer>
        <p>&copy; 2024 My Next.js App</p>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem;
        }
        footer {
          margin-top: 2rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
