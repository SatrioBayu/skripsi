import styles from "../assets/css/Button.module.css";

const ButtonAjukanSurat = (props) => {
  return (
    <a href="/ajukanSurat" className={`btn ${styles["coba"]} ${styles["padding"]} ${styles["btn-shadow"]} ${styles["btn-hijau"]}`}>
      {props.text}
    </a>
  );
};

export default ButtonAjukanSurat;
