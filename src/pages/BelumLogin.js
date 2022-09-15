import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gambar from "../assets/images/access-denied.jpg";
import styles from "../assets/css/BelumLogin.module.css";

const BelumLogin = () => {
  return (
    <div class="main">
      <Navbar />
      <div class="container my-5">
        <div class="img-container d-flex justify-content-center">
          <img className={`img-fluid ${styles["img"]}`} src={Gambar} alt="Gambar" />
        </div>
        <h2 className="fw-bold text-center my-3">Anda Belum Login</h2>
        <p className="text-center">
          Jika belum memiliki akun silahkan menemui RT untuk dilakukan <br /> proses pendataan kependudukan dan mendapatkan akun
        </p>
        <p className="text-center">
          Jika telah memiliki akun bisa melakukan login melalui navbar diatas atau lewat{" "}
          <span>
            <a href="/login" className={`${styles["link"]}`}>
              sini
            </a>
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BelumLogin;
