import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

const ListArtikel = () => {
  return (
    <div className="main">
      <Navbar />
      <div class="container-fluid my-5">
        <h2 className="text-center">Daftar Artikel</h2>
        <p className="text-center">Anda dapat melihat daftar artikel</p>
        <div class="row mt-2 mb-5 gy-5">
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
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
            <CardArtikel />
          </div>
          <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
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
