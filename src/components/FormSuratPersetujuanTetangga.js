import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";
import axios from "axios";

const FormSuratPersetujuanTetangga = (props) => {
  const navigate = useNavigate();
  const [keterangan, setKeterangan] = useState("");
  const [fileSurat, setFileSurat] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!fileSurat) {
      setError("File");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("keterangan_surat", keterangan);
    formData.append("document", fileSurat);
    setLoading(true);
    try {
      const res = await axios.post("https://pengmas.mides.id/api/v1/generate/surat-persetujuan-tetangga", formData, {
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
        title: "Terjadi Kesalahan Silahkan Coba Lagi",
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
      <div className="form-input">
        <div class="group mb-4">
          <h5 className={`${styles["required"]}`}>Unggah Surat</h5>
          <p className={`${styles["small"]}`}>
            Silahkan unduh template surat yang tersedia apabila diperlukan pada proses pengajuan surat. Jenis surat yang diterima berupa file <span className={`fw-bold`}>.pdf</span>
          </p>
          <input
            required
            onChange={(e) => {
              setFileSurat(e.target.files[0]);
              setError(false);
            }}
            type="file"
            accept="application/pdf"
            class={`form-control ${error === "File" ? `${styles["invalid"]}` : ""}`}
            aria-label="File Unggah"
          />
          {error === "File" && <p className={`${styles["invalid-text"]}`}>Silahkan lakukan upload surat yang diperlukan terlebih dahulu. Template surat telah disediakan pada halaman ini.</p>}
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
          <p className={`fw-bold ${styles.small}`}>Keterangan: Dihimbau untuk tetap mendatangi RT di Jl. Kopi 1A Malang untuk proses selanjutnya</p>
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

export default FormSuratPersetujuanTetangga;
