import styles from "../assets/css/PengajuanSuratHome.module.css";
import ButtonAjukanSurat from "./ButtonAjukanSurat";

const PengajuanSuratHome = () => {
  return (
    <div className={`${styles["bg"]} ${styles["padding"]}`}>
      <div class="container">
        <div class="row align-items-center g-4">
          <div class={`col-md-1 ${styles["dummy"]}`}></div>
          <div class="col-md-7">
            <h3 className={`${styles["text-color"]} fw-bold`}>Butuh Surat RT?</h3>
            <p className={`${styles["text-color"]} ${styles["no-margin"]}`}>Lakukan pengajuan surat RT secara online </p>
          </div>
          <div class="col-md-4">
            <ButtonAjukanSurat text="Ajukan Surat Online" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengajuanSuratHome;
