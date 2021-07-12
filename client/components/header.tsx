import MenuButton from "./menuBtn";
import SearchButton from "./searchBtn";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className={styles.main}>
      <div>
        <Link href="/">
          <a>
            <img src="/logo.jpg" />
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <a href="#">Početna</a>
        <a href="#">Sve o mapiranju</a>
        <a href="#">Tuning katalog</a>
        <a href="#">Ovlašteni zastupnici</a>
        <a href="#">Postani partner</a>
      </div>
      <div className={styles.menu}>
        <MenuButton />
      </div>
      <div className={styles.search}>
        <SearchButton />
      </div>
      <button className={"btn btn-p"}>Postani partner</button>
    </header>
  );
};
