import Card from "./Card";
import ButtonLainnya from "./ButtonLainnya";

const Pengumuman = () => {
  return (
    <div class="container-fluid">
      <div class="my-4 d-flex flex-column align-items-center">
        <h3>Pengumuman</h3>
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
      <ButtonLainnya text="Pengumuman Lainnya" />
    </div>
  );
};

export default Pengumuman;
