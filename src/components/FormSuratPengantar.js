import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormSuratPengantar = (props) => {
  const navigate = useNavigate();
  const [alamatAyah, setAlamatAyah] = useState("");
  const [alamatIbu, setAlamatIbu] = useState("");

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
          <input required type="text" onChange={(e) => setAlamatAyah(e.target.value)} class="form-control" placeholder="Contoh: Jalan Coklat IV" aria-label="Alamat Ayah" />
        </div>
        <div class="group mb-4">
          <h5>Alamat Ibu</h5>
          <input required type="text" onChange={(e) => setAlamatIbu(e.target.value)} class="form-control" placeholder="Contoh: Jalan Coklat IV" aria-label="Alamat Ibu" />
        </div>
        <div class="group mb-4">
          <input type="submit" className="btn btn-success" value="Ajukan Surat" />
        </div>
      </div>
    </form>
  );
};

export default FormSuratPengantar;
