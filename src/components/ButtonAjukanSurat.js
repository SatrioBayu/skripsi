import styles from "../assets/css/Button.module.css";

const ButtonAjukanSurat = (props) => {
  return <button className={`btn ${styles["padding"]} ${styles["btn-shadow"]} ${styles["btn-hijau"]}`}>{props.text}</button>;
};

export default ButtonAjukanSurat;
