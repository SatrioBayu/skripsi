import styles from "../assets/css/Carousel.module.css";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class={`carousel-inner`}>
        <div class={`carousel-item active ${styles["img-height"]}`}>
          <a href="/ajukanSurat">
            <img src="https://img.freepik.com/free-vector/online-document-concept-illustration_114360-5453.jpg?w=2000" class="d-block w-100" alt="..." />
          </a>
        </div>
        <div class={`carousel-item ${styles["img-height"]}`}>
          <img
            src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class={`carousel-item ${styles["img-height"]}`}>
          <img
            src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
            class="d-block w-100"
            alt="..."
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
