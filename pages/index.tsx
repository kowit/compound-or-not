import Head from "next/head";
import firebase from "firebase";
import styles from "../styles/Home.module.css";
import Main from "../components/home/Main";

const Home = () => {
  const analytics = firebase.analytics();
  return (
    <div className={styles.container}>
      <Head>
        <title>Compound or Not</title>
        <meta name="Compound or Not" content="Compound or Not" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
};

export default Home;
