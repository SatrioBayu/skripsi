import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Profile.module.css";
import Biodata from "../components/Biodata";

const Profile = () => {
  return (
    <div class="main">
      <Navbar />
      <div class="container my-5">
        <h2 className="text-center">Informasi Akun</h2>
        <div class="isi mt-5">
          <div class="biodata mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata</h5>
            <Biodata label="Nama" />
            <Biodata label="NIK" value="195150400111022" />
            <Biodata label="Alamat" value="Gubeng Airlangga" />
            <Biodata label="No HP" value="08123456789010" />
            <Biodata label="Agama" value="Islam" />
            <Biodata label="Jenis Kelamin" value="Laki-Laki" />
            <Biodata label="Tempat Tanggal Lahir" value="Surabaya, 23 September 2001" />
            <Biodata label="Pendidikan" value="Diploma IV/Strata I" />
            <Biodata label="Pekerjaan" value="Programmer" />
            <Biodata label="Status Pernikahan" value="Belum Menikah" />
            <Biodata label="Status Dalam Keluarga" value="Anak" />
            <Biodata label="Kewarganegaraan" value="WNI" />
            <Biodata label="Riwayat Penyakit" value="-" />
          </div>
          <div class="biodata-ayah mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata Ayah</h5>
            <Biodata label="Nama Ayah" value="Tupac Shakur" />
            <Biodata label="Agama" value="Islam" />
            <Biodata label="Pekerjaan" value="Rapper" />
          </div>
          <div class="biodata-ibu mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata Ibu</h5>
            <Biodata label="Nama Ibu" value="Benedetta" />
            <Biodata label="Agama" value="Islam" />
            <Biodata label="Pekerjaan" value="EXP Laner" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
