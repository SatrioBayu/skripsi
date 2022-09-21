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
        <div class="table-responsive-md mt-5">
          <table class={`table table-striped ${styles["text"]}`}>
            <thead>
              <tr>
                <th scope="col" colSpan="10">
                  Jenis Surat
                </th>
                <th scope="col" className="text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="10">Surat Domisili</td>
                <td className="text-center">Dalam Proses</td>
              </tr>
              <tr>
                <td colSpan="10">Surat Pengantar Menikah</td>
                <td className="text-center">
                  <a className={`${styles["link"]}`} href="/Surat Pengantar Nikah.docx" target="_blank" download="Coba.docx">
                    Disetujui
                  </a>
                </td>
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
