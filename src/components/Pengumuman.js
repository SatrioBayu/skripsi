import ButtonLainnya from "./ButtonLainnya";
import CardPengumuman from "./CardPengumuman";

const Pengumuman = () => {
  return (
    <div class="container-fluid">
      <div class="my-4 d-flex flex-column align-items-center">
        <h3>Pengumuman</h3>
        <hr />
      </div>
      <div class="row g-4">
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardPengumuman />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardPengumuman />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardPengumuman />
        </div>
      </div>
      <ButtonLainnya text="Pengumuman Lainnya" destination="pengumuman" />
    </div>
  );
};

export default Pengumuman;
