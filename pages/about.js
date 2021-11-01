import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Posts | About</title>
        <meta name="keywords" content="posts" />
      </Head>
      <div className="about">
        <header className="about__header">
          <h1 className="about__title">About</h1>
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
      </div>
    </>
  );
};

export default About;
