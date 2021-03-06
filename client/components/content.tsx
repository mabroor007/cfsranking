import styles from "../styles/Content.module.css";

import Link from "next/link";

export interface Props {}
export const Content: React.FC<Props> = () => {
  return (
    <main className={styles.content}>
      <section className={styles.content_sect}>
        <h3>Now</h3>
        <h2>Compare vehicle performance like never before</h2>
        <p>
          cfs-performance is the application which you can use to make a good
          decision about purchasing your vehicle. Using our comparison tool you
          can compare performance of vehicle from various popular brands and
          decide which one is optimal for you
        </p>
        <Link href="/getstarted">
          <a className="btn btn-p gcust">Get Started</a>
        </Link>
      </section>
      <section className={styles.content_sect}>
        <img src="/maincar.png" />
      </section>
    </main>
  );
};
