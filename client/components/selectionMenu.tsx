import styles from "../styles/SelectionMenu.module.css";

export interface Props {}

export const SelectionMenu: React.FC<Props> = () => {
  return (
    <div className={styles.main}>
      <SelectBox title="Brand" options={["Audi", "BMW", "Volvo"]} />
      <SelectBox title="Model" options={["Striker", "Ring", "Blow"]} />
      <SelectBox title="Generation" options={["Striker", "Ring", "Blow"]} />
      <SelectBox title="Motor" options={["Striker", "Ring", "Blow"]} />
    </div>
  );
};

export interface SelectBoxProps {
  title: string;
  options: string[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ title, options }) => {
  return (
    <div>
      <div>{title}</div>
      <select className={styles.select} name={title}>
        <option selected value={"Please select " + title}>
          {"Please select " + title}
        </option>
        {options &&
          options.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
};
