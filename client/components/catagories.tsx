import styles from "../styles/Catogries.module.css";
import { Bike } from "./bike";
import { Boat } from "./boat";
import { BullDozer } from "./bulldozer";
import { Car } from "./car";
import { Truck } from "./truck";

export type Vehicle = "car" | "truck" | "boat" | "bulldozer" | "bike";

export interface Props {
  selected: Vehicle;
  onCatagoryClick: (name: Vehicle) => void;
}
export const Catagories: React.FC<Props> = ({ onCatagoryClick, selected }) => {
  const isSelected = (name: Vehicle) => {
    if (selected === name) return true;
    return false;
  };

  return (
    <div className={styles.main}>
      <Catagory
        name="car"
        selected={isSelected("car")}
        path="/car.svg"
        onCatagoryClick={onCatagoryClick}
      />
      <Catagory
        name="truck"
        selected={isSelected("truck")}
        path="/truck.svg"
        onCatagoryClick={onCatagoryClick}
      />
      <Catagory
        name="bulldozer"
        selected={isSelected("bulldozer")}
        path="/bulldozer.svg"
        onCatagoryClick={onCatagoryClick}
      />
      <Catagory
        name="boat"
        selected={isSelected("boat")}
        path="/boat.svg"
        onCatagoryClick={onCatagoryClick}
      />
      <Catagory
        name="bike"
        selected={isSelected("bike")}
        path="/bike.svg"
        onCatagoryClick={onCatagoryClick}
      />
      <img style={{ marginLeft: "5rem" }} src="/logo.jpg" />
    </div>
  );
};

export interface CatagoryProps {
  selected: boolean;
  path: string;
  name: Vehicle;
  onCatagoryClick: (name: Vehicle) => void;
}

export const Catagory: React.FC<CatagoryProps> = ({
  selected,
  name,
  onCatagoryClick,
}) => {
  return (
    <div
      onClick={() => onCatagoryClick(name)}
      style={{ backgroundColor: selected ? "#d00000" : "white" }}
      className={styles.catagory}
    >
      {name === "car" ? <Car selected={selected} /> : null}
      {name === "bike" ? <Bike selected={selected} /> : null}
      {name === "boat" ? <Boat selected={selected} /> : null}
      {name === "bulldozer" ? <BullDozer selected={selected} /> : null}
      {name === "truck" ? <Truck selected={selected} /> : null}
    </div>
  );
};
