import styles from "../assets/css/Card.module.css";
import { NavLink } from "react-router-dom";

const CardPengumuman = (props) => {
  return (
    <div class={`card ${styles["card-border"]} ${styles["card-width"]} ${styles["card-shadow"]} h-100`}>
      <img src={props.data.image} class={`${styles["card-image"]}`} alt="Pengumuman" />
      <div class="card-body">
        <NavLink to={`/pengumuman/${props.data.id}`}>
          <h5 class={`card-title ${styles["card-color"]} ${styles["card-title"]}`}>{props.data.title}</h5>
        </NavLink>
        <p class="card-text">{props.data.snippet}</p>
        <NavLink to={`/pengumuman/${props.data.id}`}>
          <p class={`${styles["card-color"]} ${styles["card-footer"]}`}>Baca Selengkapnya</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CardPengumuman;
