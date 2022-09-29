import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";

const FormSuratDomisili = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [kepemilikanRumah, setKepemilikanRumah] = useState("Kos");
  const [fileSurat, setFileSurat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!alamat) {
      setError("Alamat");
    } else if (!fileSurat) {
      setError("File");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      jenisSurat: props.surat,
      alamat,
      kepemilikanRumah,
      fileSurat,
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
      <div className="form-input">
        <div class="group mb-4">
          <h5>Alamat Domisili</h5>
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
          <h5>Jenis Kepemilikan Rumah</h5>
          <select onChange={(e) => setKepemilikanRumah(e.target.value)} class="form-select" aria-label="Jenis Kepemilikan Rumah">
            <option value="Kos">Kos</option>
            <option value="Kontrak">Kontrak</option>
            <option value="Pribadi">Pribadi</option>
          </select>
        </div>
        <div class="group mb-4">
          <h5>Unggah Surat</h5>
          <input
            accept=".doc, .docx, application/msword, application/pdf"
            required
            onChange={(e) => {
              setFileSurat(e.target.files[0]);
              setError(false);
            }}
            type="file"
            class={`form-control ${error === "File" ? `${styles["invalid"]}` : ""}`}
            aria-label="File Unggah"
          />
          {error === "File" && <p className={`${styles["invalid-text"]}`}>Silahkan lakukan upload surat terlebih dahulu. Template surat telah disediakan pada bagian kanan halaman ini.</p>}
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
          {/* <input type="submit" className="btn btn-success" value="Ajukan Surat" /> */}
          <button onClick={handleClick} className="btn btn-success">
            Ajukan Surat
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSuratDomisili;
