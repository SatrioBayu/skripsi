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
              <p className="fs-6">Dilarang mencuri.</p>
            </li>
            <li>
              <p className="fs-6">Dilarang membuat kegaduhan saat malam hari.</p>
            </li>
            <li>
              <p className="fs-6">Tamu 2x24 jam harap lapor RT.</p>
            </li>
            <li>
              <p className="fs-6">Larangan perbuatan kriminal dan asusila.</p>
            </li>
            <li>
              <p className="fs-6">Dihimbau para warga untuk aktif dalam kegiatan RT.</p>
            </li>
            <li>
              <p className="fs-6">Warga diwajibkan menggunakan masker dalam kegiatan di luar rumah.</p>
            </li>
            <li>
              <p className="fs-6">
                Dalam rangka menciptakan kawasan <i>eco friendly</i> warga diharap menekan penggunaan listrik rumah.
              </p>
            </li>
            <li>
              <p className="fs-6">Dilarang membuang sampah sembarangan. Apabila tertangkap maka pelaku akan dikenakan denda.</p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Peraturan;
