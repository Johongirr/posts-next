import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts | Home</title>
        <meta name="keywords" content="posts" />
      </Head>
      <div className={styles.container}>
        <header className="home__header">
          <h1 className="home__title">Homepage</h1>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          laudantium autem quis delectus dolorem, modi, repellat porro cum
          reprehenderit suscipit dolorum tenetur amet culpa ab ex doloremque
          inventore. Vero, nobis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          laudantium autem quis delectus dolorem, modi, repellat porro cum
          reprehenderit suscipit dolorum tenetur amet culpa ab ex doloremque
          inventore. Vero, nobis!
        </p>
        <Link href="/posts">
          <a className={styles.btn}>See Posts Listing</a>
        </Link>
      </div>
    </>
  );
}
