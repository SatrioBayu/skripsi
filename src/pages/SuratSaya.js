import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/SuratSaya.module.css";

const SuratSaya = () => {
  return (
    <div className="main">
      <Navbar />
      <div class={`container my-5 ${styles["height"]}`}>
        <h2 class="text-center">Pengajuan Surat Saya</h2>
        <p class="text-center">Anda dapat melihat riwayat dan status pengajuan surat</p>
        <div class="table-responsive-xl mt-5">
          <table class={`table align-middle table-striped ${styles["text"]}`}>
            <thead>
              <tr>
                <th scope="col" className={`${styles["w-40"]}`}>
                  Jenis Surat
                </th>
                <th scope="col" className={`text-center ${styles["w-30"]}`}>
                  Status
                </th>
                <th scope="col" className={`text-center ${styles["w-30"]}`}>
                  Keterangan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Surat Domisili</td>
                <td className="text-center">Dalam Proses</td>
                <td className="text-center">-</td>
              </tr>
              <tr>
                <td>Surat Pengantar Menikah</td>
                <td className="text-center">
                  <a className={`${styles["link"]}`} href="/Surat Pengantar Nikah.docx" target="_blank" download="Coba.docx">
                    Disetujui
                  </a>
                </td>
                <td className="text-center">-</td>
              </tr>
              <tr>
                <td>Surat Persetujuan Tetangga</td>
                <td className={`text-center ${styles.rejected}`}>Ditolak</td>
                <td class={`${styles.small}`}>File surat yang anda upload tidak sesuai dengan jenis surat yang anda minta.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuratSaya;
