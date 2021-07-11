import styles from "../styles/IconButton.module.css";

export interface Props {
  title: string;
  iconPath: string;
}
export const IconButton: React.FC<Props> = ({ title, iconPath }) => {
  return (
    <div className={styles.main}>
      <div className={styles.ico}>
        <img src={iconPath} />
      </div>
      <div className={styles.title}>
        <div>{title}</div>
      </div>
    </div>
  );
};
