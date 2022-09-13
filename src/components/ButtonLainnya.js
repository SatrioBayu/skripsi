import styles from "../assets/css/Button.module.css";

const ButtonLainnya = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <a href={`/${props.destination}`} className={`my-5 btn ${styles["btn-biru"]}`}>
        {props.text}
      </a>
    </div>
  );
};

export default ButtonLainnya;
