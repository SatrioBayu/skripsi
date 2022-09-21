import styles from "../assets/css/Carousel.module.css";
import ButtonAjukanSurat from "./ButtonAjukanSurat";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class={`carousel-inner ${styles["img-height"]}`}>
        <div class={`carousel-item active`}>
          <div className={`${styles["wrapper"]} row align-items-center`}>
            <div class="col d-flex flex-column align-items-center">
              <h3 className={`text-center`}>Ajukan Surat Online</h3>
              <p className={`text-center ${styles["hide"]}`}>Lakukan pengajuan surat RT secara online melalui link berikut</p>
              <ButtonAjukanSurat text="Ajukan Surat Online" />
            </div>
          </div>
        </div>
        <div class={`carousel-item`}>
          <img
            src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
            class="d-block w-100"
            alt="Pengumuman"
          />
        </div>
        <div class={`carousel-item`}>
          <img
            src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
            class="d-block w-100"
            alt="Pengumuman"
          />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
