import styles from "../styles/MenuButton.module.css";

export default function MenuButton() {
  return (
    <div className={styles.main + " ico-btn"}>
      <img src="/menu-logo.svg" />
    </div>
  );
}
