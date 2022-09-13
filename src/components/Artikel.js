import Card from "./Card";
import ButtonLainnya from "./ButtonLainnya";

const Artikel = () => {
  return (
    <div class="container-fluid">
      <div class="my-4 d-flex flex-column align-items-center">
        <h3>Artikel</h3>
        <hr />
      </div>
      <div class="row g-4">
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <Card />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <Card />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <Card />
        </div>
      </div>
      <ButtonLainnya text="Artikel Lainnya" />
    </div>
  );
};

export default Artikel;