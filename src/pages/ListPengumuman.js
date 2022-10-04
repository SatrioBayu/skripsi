import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import HorizontalCard from "../components/HorizontalCard";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Gotong from "../assets/images/gotong.jpeg";
import Masang from "../assets/images/masang.jpeg";
import Coba from "../assets/images/coba.jpeg";

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

const ListPengumuman = () => {
  const [announcements, setAnnouncements] = useState("");
  const [pagination, setPagination] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/pengumuman")).data.data;
    setPagination(Math.ceil(data.length / 9));
    setAnnouncements(data);
  };

  const changePage = (data) => {
    setPage(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center">Daftar Pengumuman</h2>
        <p className="text-center">Anda dapat melihat daftar pengumuman</p>

        {dummy && dummy.map((announcement) => <HorizontalCard key={announcement.id} data={announcement} />)}

        <Pagination pages={pagination} page={page} changePage={changePage} />
      </div>
      <Footer />
    </div>
  );
};

export default ListPengumuman;
