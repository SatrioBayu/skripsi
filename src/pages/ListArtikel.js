import { useState } from "react";
import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import axios from "axios";
import { useEffect } from "react";

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
          {articles &&
            articles.map((article) => (
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
