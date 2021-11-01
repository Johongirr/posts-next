import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Posts.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
};

export default function Posts({ users }) {
  return (
    <>
      <Head>
        <title>Posts List</title>
        <meta name="keywords" content="posts" />
      </Head>
      <div className={styles.post}>
        <header className="posts__header">
          <h1 className="posts__title">Posts</h1>
        </header>
        {users.map((user) => (
          <Link href={`/posts/${user.id}`} key={user.id}>
            <div className={styles.card}>
              <a className={styles.link}>
                <h3>{user.name}</h3>
              </a>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
