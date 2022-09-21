import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormSuratDomisili = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [kepemilikanRumah, setKepemilikanRumah] = useState("Kos");
  const [fileSurat, setFileSurat] = useState("");
  const [keterangan, setKeterangan] = useState("");

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
          <input required type="text" onChange={(e) => setAlamat(e.target.value)} class="form-control" placeholder="Contoh: Jalan Coklat IV" aria-label="Alamat" />
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
          <input required onChange={(e) => setFileSurat(e.target.files[0])} type="file" class="form-control" aria-label="File Unggah" />
        </div>
        <div class="group mb-4">
          <h5>Keterangan</h5>
          <textarea onChange={(e) => setKeterangan(e.target.value)} className="form-control" aria-label="Keterangan" placeholder="Tuliskan keterangan anda disini" cols="30" rows="10"></textarea>
        </div>
        <div class="group mb-4">
          <input type="submit" className="btn btn-success" value="Ajukan Surat" />
        </div>
      </div>
    </form>
  );
};

export default FormSuratDomisili;
