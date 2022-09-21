import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";

const FormSuratBelumMenikah = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!alamat) {
      setError("Alamat");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      jenisSurat: props.surat,
      alamat,
      keterangan,
    };
    Swal.fire({
      icon: "success",
      title: "Surat Berhasil Diajukan",
      confirmButtonColor: "#198754",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/suratSaya");
      }
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-input">
        <div class="group mb-4">
          <h5>Alamat</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setAlamat(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Alamat" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Jalan Coklat IV"
            aria-label="Alamat"
          />
          {error === "Alamat" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat domisili anda</p>}
        </div>
        <div class="group mb-4">
          <h5>Keterangan</h5>
          <textarea onChange={(e) => setKeterangan(e.target.value)} className="form-control" aria-label="Keterangan" placeholder="Tuliskan keterangan anda disini" cols="30" rows="10"></textarea>
        </div>
        <div class="group mb-4">
          <button onClick={handleClick} className="btn btn-success">
            Ajukan Surat
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSuratBelumMenikah;
