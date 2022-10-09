import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ArrowBack from "../components/ArrowBack";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import parse from "html-react-parser";
import Gotong from "../assets/images/gotong.jpeg";
import Masang from "../assets/images/masang.jpeg";
import Coba from "../assets/images/coba.jpeg";
import styles from "../assets/css/Detail.module.css";

const dummy = [
  {
    id: 1,
    image: Gotong,
    title: "Jadwal Kerja Bakti",
    isi: "Kepedulian terhadap lingkungan harus ditunjukkan setiap orang. Hal ini perlu dilakukan untuk menjaga keberlangsungan hidup manusia, hewan, tumbuhan. Jika tidak dirawat dengan baik, akan terjadi kerusakan pada alam dan bisa mengancam setiap makhluk hidup. Masalah lingkungan pada hakikatnya menjadi tanggung jawab semua orang. Untuk itu, sangat penting untuk membina wawasan dan kepedulian terhadap lingkungan di kalangan masyarakat. Selain itu, setiap orang juga harus mengerti dan memahami pengertian kepedulian terhadap lingkungan. Kepedulian terhadap lingkungan merupakan sikap yang harus diwujudkan dalam kehidupan sehari-hari, salah satunya adalah turut aktif dalam kegiatan kerja bakti. Ada banyak manfaat kerja bakti di lingkungan masyarakat, seperti menjalin silaturahmi, menjadikan lingkungan bersih, dan lainnya. Untuk itu, setiap orang perlu menyadari pentingnya kerja bakti di lingkungan masyarakat.",
    snippet: "Kepedulian terhadap lingkungan harus ditunjukkan setiap orang. Hal ini perlu dilakukan untuk menjaga keberlangsungan hidup manusia, hewan, tumbuhan...",
  },
  {
    id: 2,
    image: Masang,
    title: "Perbaikan Lampu",
    isi: "Dalam rangka terus meningkatkan pelayanan dan kenyamanan kepada masyarakat,  Dinas Perhubungan Kota Malang melalui Bidang Penerangan Jalan Umum melakukan perbaikan lampu Penerangan Jalan Umum(PJU) yang dilaporkan oleh masyarakat. Berikut ini ringkasan perbaikan PJU yang telah dilakukan dalam sepekan terakhir. ",
    snippet: "Dalam rangka terus meningkatkan pelayanan dan kenyamanan kepada masyarakat,  Dinas Perhubungan Kota Malang melalui Bidang...",
  },
  {
    id: 3,
    image: Coba,
    title: "Agenda 17 Agustus",
    isi: "Perayaan peringatan Hari Kemerdekaan Indonesia merupakan hari besar untuk seluruh rakyat Indonesia dan di tiap daerah. Memiliki khasnya masing-masing untuk merayakan, selain upacara dan perlombaan, warga Jawa Timur (Jatim) membuat sesuatu yang unik dan berbeda. Tepatnya di RT 04, Tulusrejo, Malang, Jawa Timur sudah menjadi budaya ketika tanggal 17 Agustus di setiap tahunnya, dilakukan perayaan Hari Kemerdekaan Indonesia. Wali Kota Jawa Timur, Khofifah mengatakan 'Ini merupakan kelanjutan dari peringatan di Tulusrejo pada tahun- tahun sebelumnya, pada sebelum Covid-19 lalu juga diperingatinya di sini, jadi Tulusrejo ini akhirnya menjadi simbol masyarakat RT 04 Tulusrejo untuk kegiatan kebudayaan dan seterusnya,'.",
    snippet: "Perayaan peringatan Hari Kemerdekaan Indonesia merupakan hari besar untuk seluruh rakyat Indonesia dan di tiap daerah...",
  },
];

const DetailPengumuman = () => {
  const { id } = useParams();
  const [pengumuman, setPengumuman] = useState("");

  const fetchData = async () => {
    // const data = await (await axios.get(`https://pengmas.mides.id/api/v1/pengumuman/${id}`)).data.data;
    const data = dummy.filter((data) => data.id == id)[0];
    setPengumuman(data);
  };

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="container mt-5">
        <ArrowBack handleBack={handleBack} />
        {pengumuman && (
          <div id="pengumuman" className="mb-5">
            <h2>{pengumuman.title}</h2>
            <img src={pengumuman["image"]} className={`my-3 ${styles["image-header"]}`} alt="Image" />
            {/* {parse(pengumuman.content)} */}
            <p>{pengumuman.isi}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailPengumuman;
