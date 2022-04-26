import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cocktails for you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Cocktails for you!</h1>
      </main>

      <footer></footer>
    </div>
  );
}
