import Head from "next/head";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <img className={styles.back_svg} src="/back.svg" />
      <div className={"wrapper"}>
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
      </div>
      <Footer />
    </div>
  );
}
