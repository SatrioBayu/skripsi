import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";
import axios from "axios";

const FormSuratPengantar = (props) => {
  const navigate = useNavigate();
  const [alamatAyah, setAlamatAyah] = useState("");
  const [alamatIbu, setAlamatIbu] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!alamatAyah) {
      setError("Alamat Ayah");
    } else if (!alamatIbu) {
      setError("Alamat Ibu");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      father_address: alamatAyah,
      mother_address: alamatIbu,
    };
    setLoading(true);
    try {
      const res = await axios.post("https://pengmas.mides.id/api/v1/generate/surat-pengantar-nikah", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Surat Berhasil Diajukan",
        confirmButtonColor: "#198754",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/suratSaya");
        }
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        confirmButtonColor: "#198754",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/ajukanSurat");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-input">
        <div class="group mb-4">
          <h5 className={`${styles["required"]}`}>Alamat Ayah</h5>
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
          <h5 className={`${styles["required"]}`}>Alamat Ibu</h5>
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
          {loading ? (
            <button className={`btn btn-success`} type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          ) : (
            <button onClick={handleClick} className="btn btn-success">
              Ajukan Surat
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default FormSuratPengantar;
