import styles from "../assets/css/Card.module.css";
import { NavLink } from "react-router-dom";
// import parse from "html-react-parser";

const CardArtikel = (props) => {
  return (
    // Asli
    // <div class={`card ${styles["card-border"]} ${styles["card-width"]} ${styles["card-shadow"]} h-100`}>
    //   <img src={Gotong} class={`${styles["card-image"]}`} alt="Artikel" />
    //   <div class="card-body">
    //     <NavLink to={`/artikel/${props.data.id}`}>
    //       <h5 class={`card-title ${styles["card-color"]} ${styles["card-title"]}`}>{props.data.title}</h5>
    //     </NavLink>
    //     {/* {parse(props.data.content)} */}
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <NavLink to={`/artikel/${props.data.id}`}>
    //       <p class={`${styles["card-color"]} ${styles["card-footer"]}`}>Baca Selengkapnya</p>
    //     </NavLink>
    //   </div>
    // </div>

    // Dummy
    <div class={`card ${styles["card-border"]} ${styles["card-width"]} ${styles["card-shadow"]} h-100`}>
      <img src={props.data.image} class={`${styles["card-image"]}`} alt="Artikel" />
      <div class="card-body">
        <NavLink to={`/artikel/${props.data.id}`}>
          <h5 class={`card-title ${styles["card-color"]} ${styles["card-title"]}`}>{props.data.title}</h5>
        </NavLink>
        {/* {parse(props.data.content)} */}
        <p class="card-text">{props.data.snippet}</p>
        <NavLink to={`/artikel/${props.data.id}`}>
          <p class={`${styles["card-color"]} ${styles["card-footer"]}`}>Baca Selengkapnya</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CardArtikel;
