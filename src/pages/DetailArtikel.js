import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ArrowBack from "../components/ArrowBack";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import parse from "html-react-parser";

const DetailArtikel = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState("");

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/berita")).data.data;
    const detail = data.filter((a) => a.id == id)[0];
    setArtikel(detail);
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

        {artikel && (
          <div id="artikel" className="mb-5">
            <h2>{artikel.title}</h2>
            <img src={artikel["image_url"]} className="img-fluid my-3" alt="Image" />
            {parse(artikel.content)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailArtikel;
