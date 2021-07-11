import styles from "../styles/TopRatedFromSelection.module.css";
import { IconButton } from "./iconButton";

export interface Props {}
export const TopRatedFromSelection: React.FC<Props> = () => {
  return (
    <div className={styles.main}>
      <div className={styles.badge}>Top Rated</div>
      <div className={styles.img_sect}>
        <img src="/audi.png" />
      </div>
      <div className={styles.detail_sect}>
        <h6>Audi</h6>
        <h4>Audi RS e-tron GT</h4>
        <h5>20.2–19.3 kWh/100km (NEDC); 22.5–20.6 kWh/100km (WLTP)CO₂</h5>
        <p>
          Never before has an RS model been so full of energy as the Audi RS
          e-tron GT. Its technical brilliance goes far beyond anything that can
          be expressed as performance data. These values are what defines this
          top-of-the-line Audi model’s thoroughly forward-looking
          characteristics. The Audi RS e-tron GT combines performance and
          progressiveness without compromise.
        </p>
        <div className={styles.btns}>
          <IconButton title="share" iconPath="/share.svg" />
          <IconButton title="copy link" iconPath="/copy.svg" />
        </div>
      </div>
    </div>
  );
};
