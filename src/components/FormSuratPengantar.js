import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";

const FormSuratPengantar = (props) => {
  const navigate = useNavigate();
  const [alamatAyah, setAlamatAyah] = useState("");
  const [alamatIbu, setAlamatIbu] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!alamatAyah) {
      setError("Alamat Ayah");
    } else if (!alamatIbu) {
      setError("Alamat Ibu");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      jenisSurat: props.surat,
      alamatAyah,
      alamatIbu,
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
          <h5>Alamat Ayah</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setAlamatAyah(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Alamat Ayah" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Jalan Coklat IV"
            aria-label="Alamat Ayah"
          />
          {error === "Alamat Ayah" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat ayah anda</p>}
        </div>
        <div class="group mb-4">
          <h5>Alamat Ibu</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setAlamatIbu(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Alamat Ibu" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Jalan Coklat IV"
            aria-label="Alamat Ibu"
          />
          {error === "Alamat Ibu" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat ibu anda</p>}
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

export default FormSuratPengantar;
