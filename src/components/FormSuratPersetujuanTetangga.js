import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormSuratPersetujuanTetangga = (props) => {
  const navigate = useNavigate();
  const [alamat, setAlamat] = useState("");
  const [jenisUsaha, setJenisUsaha] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [fileSurat, setFileSurat] = useState("");

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
          <input required type="text" onChange={(e) => setAlamat(e.target.value)} class="form-control" placeholder="Contoh: Jalan Coklat IV" aria-label="Alamat" />
        </div>
        <div class="group mb-4">
          <h5>Jenis Usaha</h5>
          <input required type="text" onChange={(e) => setJenisUsaha(e.target.value)} class="form-control" placeholder="Makanan" aria-label="Jenis Usaha" />
        </div>
        <div class="group mb-4">
          <h5>Lokasi Tempat Usaha</h5>
          <input required type="text" onChange={(e) => setLokasi(e.target.value)} class="form-control" placeholder="Contoh: Jalan Coklat IV" aria-label="Lokasi Usaha" />
        </div>
        <div class="group mb-4">
          <h5>Unggah Surat</h5>
          <input required onChange={(e) => setFileSurat(e.target.files[0])} type="file" class="form-control" aria-label="File Unggah" />
        </div>
        <div class="group mb-4">
          <p className="fw-bold">Keterangan: Dihimbau untuk tetap mendatangi RT untuk proses selanjutnya</p>
        </div>
        <div class="group mb-4">
          <input type="submit" className="btn btn-success" value="Ajukan Surat" />
        </div>
      </div>
    </form>
  );
};

export default FormSuratPersetujuanTetangga;
