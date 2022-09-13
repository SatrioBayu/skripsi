import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../assets/css/Arrow.module.css";

const ArrowBack = (props) => {
  const onBack = () => {
    props.handleBack();
  };

  return (
    <div className="mb-3">
      <a href="#" onClick={onBack} className={`${styles["biru"]}`}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        &nbsp; &nbsp; Kembali
      </a>
    </div>
  );
};

export default ArrowBack;
