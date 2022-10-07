import styles from "../assets/css/LampiranSurat.module.css";

const LampiranSurat = () => {
  return (
    <div class={`wrapper ${styles["text"]}`}>
      <div class={`template-surat mt-4 mb-3 ${styles["border"]} ${styles["padding"]} ${styles["shadow"]}`}>
        <h6 class="text-center fw-bold">Template Surat</h6>
        <ul className={`${styles["padding-left"]} ${styles["blue"]}`}>
          <li className={`${styles["small"]}`}>
            <a href="/surat keterangan domisili.doc" target="_blank" download>
              Surat Domisili
            </a>
          </li>
          <li className={`${styles["small"]}`}>
            <a href="/Surat Pernyataan Persetujuan Tetangga.docx" target="_blank" download>
              Surat Persetujuan Tetangga
            </a>
          </li>
        </ul>
      </div>
      {/* <div class={`informasi mt-4 mb-3 ${styles["border"]} ${styles["padding"]} ${styles["shadow"]}`}>
        <h6 class="text-center fw-bold">Informasi</h6>
        <p className={`${styles["small"]} text-center`}>Silahkan unduh template surat diatas apabila diperlukan pada proses pengajuan surat</p>
      </div> */}
    </div>
  );
};

export default LampiranSurat;
