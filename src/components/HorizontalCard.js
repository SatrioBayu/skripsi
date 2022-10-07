import styles from "../assets/css/HorizontalCard.module.css";

const HorizontalCard = (props) => {
  return (
    <div class={`card my-5 ${styles["card-border"]}`}>
      <div class="row g-0 align-items-center">
        <div class="col-md-3 p-2 d-flex justify-content-center">
          <a href={`/pengumuman/${props.data.id}`} className="w-100">
            <img src={props.data.image} class={`img-fluid rounded-start ${styles["side-img"]}`} alt="Pengumuman" />
          </a>
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <a href={`/pengumuman/${props.data.id}`}>
              <h5 class="card-title fw-bold mb-3">{props.data.title}</h5>
            </a>
            <p class="card-text">{props.data.snippet}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
