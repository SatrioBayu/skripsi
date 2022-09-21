import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";

const FormSuratPersetujuanTetangga = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [jenisUsaha, setJenisUsaha] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [fileSurat, setFileSurat] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!alamat) {
      setError("Alamat");
    } else if (!jenisUsaha) {
      setError("Jenis Usaha");
    } else if (!lokasi) {
      setError("Lokasi");
    } else if (!fileSurat) {
      setError("File");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      jenisSurat: props.surat,
      alamat,
      jenisUsaha,
      lokasi,
      fileSurat,
    };
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Surat Berhasil Diajukan",
      confirmButtonColor: "#198754",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/suratSaya");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <div class="group mb-4">
          <h5>Alamat Tinggal</h5>
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
          {error === "Alamat" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat tinggal anda sekarang</p>}
        </div>
        <div class="group mb-4">
          <h5>Jenis Usaha</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setJenisUsaha(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Jenis Usaha" ? `${styles["invalid"]}` : ""}`}
            placeholder="Makanan"
            aria-label="Jenis Usaha"
          />
          {error === "Jenis Usaha" && <p className={`${styles["invalid-text"]}`}>Silahkan isi jenis usaha anda</p>}
        </div>
        <div class="group mb-4">
          <h5>Lokasi Tempat Usaha</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setLokasi(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Lokasi" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Jalan Coklat IV"
            aria-label="Lokasi Usaha"
          />
          {error === "Lokasi" && <p className={`${styles["invalid-text"]}`}>Silahkan isi alamat lokasi usaha anda</p>}
        </div>
        <div class="group mb-4">
          <h5>Unggah Surat</h5>
          <input
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
          <p className="fw-bold">Keterangan: Dihimbau untuk tetap mendatangi RT untuk proses selanjutnya</p>
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

export default FormSuratPersetujuanTetangga;
