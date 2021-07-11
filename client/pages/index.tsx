import Head from "next/head";
import { Content } from "../components/content";
import { Header } from "../components/header";
import { CfsMeter } from "../components/meter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <img className={styles.back_svg} src="/back.svg" />
      <div className={styles.wrapper}>
        <Head>
          <title>CFS Performance</title>
          <meta
            name="description"
            content="Check and compare datails of diffrent cars from various companies"
          />
          <link rel="icon" href="/logo.jpg" />
        </Head>
        <Header />
        <Content />
        <div className={styles.downdown}>
          <img height="100%" src="/downdown.svg" />
        </div>
        <CfsMeter />
      </div>
    </div>
  );
}
