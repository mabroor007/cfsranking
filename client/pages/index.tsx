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

      <div className={styles.endshape}>
        <img src="/endshape.svg" />
      </div>

      <footer className={styles.footer}>
        <div className={styles.backdrop}></div>
        <div className={styles.wrapper + " " + styles.foot}>
          <h1>Need Help?</h1>
          <p>
            We would be more then happy to help you if you find any difficulty
            you can contact us and we will reach you as soon as possilbe
          </p>
          <button>Contact Us</button>
        </div>
      </footer>

      <div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div>
              <img src="/logo.jpg" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
              <button className="btn btn-p">Signup for News letter</button>
            </div>
            <div className={styles.social}>
              <img src="/facebook.svg" />
              <img src="/instagram.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
