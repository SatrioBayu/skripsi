import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/Form.module.css";
import axios from "axios";

const FormSuratDomisili = (props) => {
  const navigate = useNavigate();
  // const [alamat, setAlamat] = useState("");
  const [kepemilikanRumah, setKepemilikanRumah] = useState("Kos");
  const [fileSurat, setFileSurat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [pemilikRumah, setPemilikRumah] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    // if (!alamat) {
    //   setError("Alamat");
    // }
    if (!pemilikRumah) {
      setError("Pemilik");
    } else if (!fileSurat) {
      setError("File");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("keterangan_surat", keterangan);
    formData.append("domicile_status", kepemilikanRumah);
    formData.append("document", fileSurat);
    formData.append("owner_house_name", pemilikRumah);

    try {
      const res = await axios.post("https://pengmas.mides.id/api/v1/upload/surat-domisili", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
        {/* <div class="group mb-4">
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
        </div> */}
        <div class="group mb-4">
          <h5 className={`${styles["required"]}`}>Jenis Kepemilikan Rumah</h5>
          <select onChange={(e) => setKepemilikanRumah(e.target.value)} class="form-select" aria-label="Jenis Kepemilikan Rumah">
            <option value="KOST">Kos</option>
            <option value="KONTRAK">Kontrak</option>
            <option value="RUMAH_SAUDARA">Rumah Saudara</option>
          </select>
        </div>
        <div class="group mb-4">
          <h5 className={`${styles["required"]}`}>Nama Pemilik Rumah</h5>
          <input
            required
            type="text"
            onChange={(e) => {
              setPemilikRumah(e.target.value);
              setError(false);
            }}
            class={`form-control ${error === "Pemilik" ? `${styles["invalid"]}` : ""}`}
            placeholder="Contoh: Samsudin"
            aria-label="Pemilik"
          />
          {error === "Pemilik" && <p className={`${styles["invalid-text"]}`}>Silahkan isi nama pemilik rumah yang sedang anda tinggali saat ini</p>}
        </div>
        <div class="group mb-4">
          <h5 className={`${styles["required"]}`}>Unggah Surat</h5>
          <p className={`${styles["small"]}`}>
            Silahkan unduh template surat yang tersedia apabila diperlukan pada proses pengajuan surat. Jenis surat yang diterima berupa file <span className={`fw-bold`}>.pdf</span>
          </p>
          <input
            accept="application/pdf"
            required
            onChange={(e) => {
              setFileSurat(e.target.files[0]);
              setError(false);
            }}
            type="file"
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
