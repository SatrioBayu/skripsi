import { useState } from "react";
import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import axios from "axios";
import { useEffect } from "react";
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

const ListArtikel = () => {
  const [articles, setArticles] = useState("");
  const [pagination, setPagination] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/berita")).data.data;
    setPagination(Math.ceil(data.length / 9));
    setArticles(data);
  };

  const changePage = (data) => {
    setPage(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    // console.log(page);
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div class="container-fluid my-5">
        <h2 className="text-center">Daftar Artikel</h2>
        <p className="text-center">Anda dapat melihat daftar artikel</p>
        <div class="row mt-2 mb-5 gy-5">
          {dummy &&
            dummy.map((article) => (
              <div key={article.id} class="col-lg-4 col-sm-6 d-flex justify-content-center">
                <CardArtikel data={article} />
              </div>
            ))}
          {/* <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div> */}
        </div>
        <Pagination pages={pagination} page={page} changePage={changePage} />
      </div>
      <Footer />
    </div>
  );
};

export default ListArtikel;
