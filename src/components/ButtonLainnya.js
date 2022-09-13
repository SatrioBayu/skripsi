import styles from "../assets/css/Button.module.css";

const ButtonLainnya = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <button className={`my-5 btn ${styles["btn-biru"]}`}>{props.text}</button>
    </div>
  );
};

export default ButtonLainnya;
