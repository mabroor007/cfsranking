import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CfsMeter } from "../../components/meter";

export default function GetStarted() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="wrapper">
        <Head>
          <title>CFS - Get Started</title>
          <meta
            name="description"
            content="Check and compare datails of diffrent cars from various companies"
          />
          <link rel="icon" href="/logo.jpg" />
        </Head>
        <Header />
        <CfsMeter />
      </div>
      <Footer />
    </div>
  );
}
