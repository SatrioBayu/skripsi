import { useState } from "react";
import Footer from "../components/Footer";
import FormSuratBelumMenikah from "../components/FormSuratBelumMenikah";
import FormSuratDomisili from "../components/FormSuratDomisili";
import FormSuratPengantar from "../components/FormSuratPengantar";
import FormSuratPersetujuanTetangga from "../components/FormSuratPersetujuanTetangga";
import FormSuratUmum from "../components/FormSuratUmum";
import LampiranSurat from "../components/LampiranSurat";
import Navbar from "../components/Navbar";

const PengajuanSurat = () => {
  const [jenisSurat, setJenisSurat] = useState("Surat Keterangan Domisili");

  return (
    <div>
      <Navbar />
      <div class="container main mt-5">
        <h2 className="text-center">Pengajuan Surat Online</h2>
        <p className="text-center">Ajukan pembuatan surat administrasi secara online disini</p>
        <div class="row">
          <div class="col-md-8 mt-4">
            <div class="group mb-4">
              <h5>Pilih Jenis Surat</h5>
              <select onChange={(e) => setJenisSurat(e.target.value)} class="form-select" aria-label="Default select example">
                {/* <option selected>Jenis Surat</option> */}
                <option value="Surat Keterangan Domisili">Surat Keterangan Domisili</option>
                <option value="Surat Keterangan Belum Menikah">Surat Keterangan Belum Menikah</option>
                <option value="Surat Pengantar Menikah">Surat Pengantar Menikah</option>
                <option value="Surat Persetujuan Tetangga">Surat Persetujuan Tetangga</option>
                <option value="Surat Umum">Surat Umum</option>
              </select>
            </div>
            {jenisSurat == "Surat Keterangan Domisili" && <FormSuratDomisili surat={jenisSurat} />}
            {jenisSurat == "Surat Pengantar Menikah" && <FormSuratPengantar surat={jenisSurat} />}
            {jenisSurat == "Surat Persetujuan Tetangga" && <FormSuratPersetujuanTetangga surat={jenisSurat} />}
            {jenisSurat == "Surat Keterangan Belum Menikah" && <FormSuratBelumMenikah surat={jenisSurat} />}
            {jenisSurat == "Surat Umum" && <FormSuratUmum surat={jenisSurat} />}
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <LampiranSurat />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PengajuanSurat;
