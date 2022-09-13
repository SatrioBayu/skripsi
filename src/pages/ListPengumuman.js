import Footer from "../components/Footer";
import HorizontalCard from "../components/HorizontalCard";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const ListPengumuman = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center">Daftar Pengumuman</h2>
        <p className="text-center fs-5">Anda dapat melihat daftar pengumuman</p>

        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />

        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default ListPengumuman;
