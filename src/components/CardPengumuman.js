import styles from "../assets/css/Card.module.css";
import { NavLink } from "react-router-dom";

const CardPengumuman = () => {
  return (
    <div class={`card ${styles["card-border"]} ${styles["card-width"]} ${styles["card-shadow"]} h-100`}>
      <img
        src="https://media.istockphoto.com/vectors/important-announcement-and-megaphone-speech-bubble-icon-vector-design-vector-id1250478098?k=20&m=1250478098&s=170667a&w=0&h=yLXX3dVBrQQhVCGETrBlNplb-xY0A2H5agB4EdNIky0="
        class="img-fluid"
        alt="..."
      />
      <div class="card-body">
        <NavLink to="/pengumuman/1">
          <h5 class={`card-title ${styles["card-color"]} ${styles["card-title"]}`}>Pengumuman 1</h5>
        </NavLink>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <NavLink to="/pengumuman/1">
          <p class={`${styles["card-color"]} ${styles["card-footer"]}`}>Baca Selengkapnya</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CardPengumuman;
