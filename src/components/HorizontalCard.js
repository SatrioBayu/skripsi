import styles from "../assets/css/HorizontalCard.module.css";

const HorizontalCard = () => {
  return (
    <div class={`card my-5 ${styles["card-border"]}`}>
      <div class="row g-0 align-items-center">
        <div class="col-md-3 d-flex justify-content-center">
          <img
            src="https://media.istockphoto.com/vectors/important-announcement-and-megaphone-speech-bubble-icon-vector-design-vector-id1250478098?k=20&m=1250478098&s=170667a&w=0&h=yLXX3dVBrQQhVCGETrBlNplb-xY0A2H5agB4EdNIky0="
            class={`img-fluid rounded-start ${styles["side-img"]}`}
            alt="..."
          />
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <a href="/pengumuman/1">
              <h5 class="card-title fw-bold mb-3">Judul Pengumuman</h5>
            </a>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed quibusdam dolores iusto ea odio animi dolore possimus! Omnis dolore rem aliquid provident nihil porro fuga ipsa sint a
              nulla!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officia laborum adipisci in facere itaque, neque non ullam rem beatae asperiores quo natus culpa, ipsa velit
              optio consequatur error soluta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
