import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const ListArtikel = () => {
  return (
    <div className="main">
      <Navbar />
      <div class="container my-5">
        <h2 className="text-center">Daftar Artikel</h2>
        <p className="text-center">Anda dapat melihat daftar artikel</p>
        <div class="row mt-2 mb-5 g-5">
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
          <div class="col-md-4">
            <CardArtikel />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default ListArtikel;
