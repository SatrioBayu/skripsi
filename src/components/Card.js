import styles from "../assets/css/Card.module.css";

const Card = () => {
  return (
    <div class={`card ${styles["card-border"]} ${styles["card-width"]} ${styles["card-shadow"]} h-100`}>
      <img src="https://awsimages.detik.net.id/community/media/visual/2021/03/04/jisoo-blackpink-4_43.jpeg?w=1200" class="img-fluid" alt="..." />
      <div class="card-body">
        <a href="#">
          <h5 class={`card-title ${styles["card-color"]} ${styles["card-title"]}`}>Pengumuman 1</h5>
        </a>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class={`${styles["card-color"]} ${styles["card-footer"]}`}>
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default Card;
