import { useState } from "react";
import styles from "../styles/Meter.module.css";
import { Catagories, Vehicle } from "./catagories";
import { SelectionMenu } from "./selectionMenu";
import { TopRatedFromSelection } from "./topRatedFromSelection";

export interface Props {}
export const CfsMeter: React.FC<Props> = () => {
  const [selected, setSelected] = useState<Vehicle>("car");

  const onCatagoryClickHandler = (name: Vehicle) => {
    setSelected(name);
  };

  return (
    <div className={styles.main}>
      <h1>Please select your vehicle</h1>
      <p>
        You can select your vehicle from the option below and details of your
        specified vehicle will be displayed below, there are several catagories
        of vehicles you can choose from
      </p>

      <Catagories
        selected={selected}
        onCatagoryClick={onCatagoryClickHandler}
      />

      <SelectionMenu />

      <TopRatedFromSelection />

      <div className={styles.perf_tun}>
        <h1>Performance Tuning</h1>
        <div>
          <img src="/left.png" />
          <img src="/right.png" />
        </div>
      </div>

      <div className={styles.perf_graph}>
        <h1>Performance Graph</h1>
        <img src="/graph.png" />
      </div>
    </div>
  );
};
