import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBack from "../components/ArrowBack";
import styles from "../assets/css/Peraturan.module.css";

const Peraturan = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="main">
      <Navbar />
      <div class="container mt-5">
        <ArrowBack handleBack={handleBack} />
        <div id="peraturan" className="mb-5">
          <h2 className="text-center my-5">Peraturan RT 04 RW 12 Kelurahan Tulusrejo</h2>
          <ol className={`${styles["no-padding"]}`}>
            <li>
              <p className="fs-6">
                Peraturan adalah ketentuan yang dibuat untuk disepakati dan diterapkan bersama pemilik, penghuni rumah maupun tamu yang bertempat tinggal untuk menetap permanen maupun yang untuk
                sementara sedang berada pada wilayah RT 004
              </p>
            </li>
            <li>
              <p className="fs-6">
                Rukun Tetangga 004 adalah wilayah kesatuan kelompok rumah yang berada di dalam wilayah RW 012 Kelurahan Tulusrejo Kecamatan Lowokwaru Kota Malang selanjutnya disebut dengan RT 004
              </p>
            </li>
            <li>
              <p className="fs-6">Perumahan yaitu lingkungan kawasan perumahan yang menjadi wilayah RT 004, tidak terkecuali fasilitas umum dan fasilitas sosialnya</p>
            </li>
            <li>
              <p className="fs-6">Warga adalah pemilik dan penghuni yang memiliki dan/atau menempati rumah/hunian sewaan berupa rumah atau bangunan lainnya yang berada di wilayah RT 004</p>
            </li>
            <li>
              <p className="fs-6">Pemilik adalah pihak yang telah memiliki dengan atau tanpa menghuni rumah di wilayah RT 004</p>
            </li>
            <li>
              <p className="fs-6">
                Tamu adalah seseorang baik dengan kendaraan maupun tidak yang memasuki wilayah RT 004 untuk bertamu, singgah, melintasi, ataupun tinggal menetap sementara kurang dari dua puluh emapt
                (24) jam, dan/atau tidak tinggal lebih dari satu (1) hari
              </p>
            </li>
            <li>
              <p className="fs-6">Penghuni adalah pihak yang menghuni baik secara tetap atau hanya menempatu dalam jangka waktu tertentu di wilayah RT 004</p>
            </li>
            <li>
              <p className="fs-6">Rumah adalah setiap bangunan hunian dan non hunian yang berada di lingkungan RT 004, yang meliputi bangunan utama dan/atau bangunan penunjang</p>
            </li>
          </ol>
          <a href="/PERATURAN.pdf" className={`${styles["link"]}`} target="_blank" download>
            Baca Selengkapnya
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Peraturan;
