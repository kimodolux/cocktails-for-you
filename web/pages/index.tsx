import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cocktails for you</title>
        <meta
          name="description"
          content="Discover and share cocktail and drink recipes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Cocktails for you</h1>
      </main>
    </div>
  );
};

export default Home;
