import styles from "../assets/css/Carousel.module.css";
import Gambar from "../assets/images/coba.jpeg";
import Gambar2 from "../assets/images/coba2.jpeg";
import Gambar3 from "../assets/images/bullhornedited.jpg";

const Carousel = () => {
  return (
    // <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
    //   <div class={`carousel-inner ${styles["img-height"]}`}>
    //     <div class={`carousel-item active`}>
    //       <div className={`${styles["wrapper"]} row align-items-center`}>
    //         <div class="col d-flex flex-column align-items-center">
    //           <h3 className={`text-center`}>Ajukan Surat Online</h3>
    //           <p className={`text-center ${styles["hide"]}`}>Lakukan pengajuan surat RT secara online melalui link berikut</p>
    //           <ButtonAjukanSurat text="Ajukan Surat Online" />
    //         </div>
    //       </div>
    //     </div>
    //     <div class={`carousel-item`}>
    //       <img src={Gambar} class="d-block w-100" alt="Pengumuman" />
    //     </div>
    //     <div class={`carousel-item`}>
    //       <img src={Gambar2} class="d-block w-100" alt="Pengumuman" />
    //     </div>
    //     <div class={`carousel-item`}>
    //       <img
    //         src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
    //         class="d-block w-100"
    //         alt="Pengumuman"
    //       />
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      {/* <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
      <div class={`carousel-inner ${styles["img-height"]}`}>
        <div class="carousel-item active" data-bs-interval="10000">
          <a href="/ajukanSurat">
            <img src={Gambar3} class="d-block w-100" alt="Ajukan Surat" />
          </a>
          <div class={`carousel-caption d-none d-md-block ${styles["bg-caption"]}`}>
            <h5>Ajukan Surat Online</h5>
            <p>
              Lakukan pengajuan surat RT secara online melalui link&nbsp;
              <span>
                <a href="/ajukanSurat" className={`${styles.link}`}>
                  berikut
                </a>
              </span>
              &nbsp;atau klik pada gambar
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src={Gambar} class="d-block w-100" alt="..." />
          <div class={`carousel-caption d-none d-md-block ${styles["bg-caption"]}`}>
            <h5>Kegiatan 17 Agustus 2022</h5>
            <p>Perayaan acara kemerdekaan</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src={Gambar2} class="d-block w-100" alt="..." />
          <div class={`carousel-caption d-none d-md-block ${styles["bg-caption"]}`}>
            <h5>Kegiatan 17 Agustus 2022</h5>
            <p>Sesi halal bihalal dan pembacaan doa</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
