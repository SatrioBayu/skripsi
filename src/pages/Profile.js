import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Profile.module.css";
import Biodata from "../components/Biodata";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("");

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("https://pengmas.telenurse.web.id/api/v1/self-information", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data.data;
    setProfile(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="main">
      <Navbar />
      <div class="container my-5">
        <h2 className="text-center">Informasi Akun</h2>
        <div class="isi mt-5">
          <div class="biodata mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata</h5>
            <Biodata label="Nama" value={profile.name} />
            <Biodata label="NIK" value={profile.nik} />
            <Biodata label="Alamat" value={profile.address} />
            <Biodata label="No HP" value={profile.phone_number} />
            <Biodata label="Agama" value={profile.religion} />
            <Biodata label="Jenis Kelamin" value={profile.gender} />
            <Biodata label="Tempat Lahir" value={profile.birthplace} />
            <Biodata label="Pendidikan" value={profile.latest_education} />
            <Biodata label="Pekerjaan" value={profile.occupation} />
            <Biodata label="Status Pernikahan" value={profile.marital_status} />
            <Biodata label="Kewarganegaraan" value={profile.citizenship} />
            <Biodata label="Riwayat Penyakit" value={profile.disease} />
          </div>
          <div class="biodata-ayah mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata Ayah</h5>
            <Biodata label="Nama Ayah" value={profile.father_name} />
            <Biodata label="Agama" value={profile.father_religion} />
            <Biodata label="Pekerjaan" value={profile.father_occupation} />
          </div>
          <div class="biodata-ibu mb-5">
            <h5 className={`${styles["secondary"]}`}>Biodata Ibu</h5>
            <Biodata label="Nama Ibu" value={profile.mother_name} />
            <Biodata label="Agama" value={profile.mother_religion} />
            <Biodata label="Pekerjaan" value={profile.mother_occupation} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
