import Head from "next/head";
import { Catagories, Vehicle } from "../components/catagories";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SelectionMenu } from "../components/selectionMenu";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<Vehicle>("car");

  const onCatagoryClickHandler = (name: Vehicle) => {
    setSelected(name);
  };

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

        <div className={styles.downdown}>
          <img height="100%" src="/downdown.svg" />
        </div>

        <h1 style={{ color: "#d23a2f", marginTop: "1rem" }}>
          Please select your vehicle
        </h1>
        <p style={{ maxWidth: "30rem", fontSize: "0.9rem", color: "#333" }}>
          You can select your vehicle from the option below and details of your
          specified vehicle will be displayed below, there are several
          catagories of vehicles you can choose from
        </p>
        <Catagories
          selected={selected}
          onCatagoryClick={onCatagoryClickHandler}
        />
        <SelectionMenu />
      </div>
      <Footer />
    </div>
  );
}
