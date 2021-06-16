import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/home/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compound or Not</title>
        <meta name="Compound or Not" content="Compound or Not" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <Footer styles={styles} />
    </div>
  );
};

export default Home;
