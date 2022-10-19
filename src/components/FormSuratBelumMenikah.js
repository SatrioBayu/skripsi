import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";
import axios from "axios";

const FormSuratBelumMenikah = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [alamatOrtu, setAlamatOrtu] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!alamat) {
      setError("Alamat");
    } else if (!alamatOrtu) {
      setError("Alamat Ortu");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      domicile_address: alamat,
      alamat_orang_tua: alamatOrtu,
      keterangan_surat: keterangan,
    };
    setLoading(true);
    try {
      const res = await axios.post("https://pengmas.telenurse.web.id/api/v1/generate/surat-keterangan-belum-nikah", data, {
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
          <h5 className={`${styles["required"]}`}>Alamat Domisili</h5>
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
          <h5 className={`${styles["required"]}`}>Alamat Orang Tua</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setAlamatOrtu(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Alamat Ortu" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Jalan Coklat IV"
            aria-label="Alamat Ortu"
          />
          {error === "Alamat Ortu" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat domisili orang tua anda</p>}
        </div>
        <div class="group mb-4">
          <h5>Keterangan</h5>
          <textarea
            onChange={(e) => setKeterangan(e.target.value)}
            className="form-control"
            aria-label="Keterangan"
            placeholder={`Contoh: \nSaya butuh surat ini untuk memenuhi persyaratan dalam proses perekrutan kerja di perusahaan Google`}
            cols="30"
            rows="10"
          ></textarea>
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

export default FormSuratBelumMenikah;
