import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import HorizontalCard from "../components/HorizontalCard";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

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

        {announcements && announcements.map((announcement) => <HorizontalCard key={announcement.id} data={announcement} />)}

        <Pagination pages={pagination} page={page} changePage={changePage} />
      </div>
      <Footer />
    </div>
  );
};

export default ListPengumuman;
