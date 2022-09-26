import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ArrowBack from "../components/ArrowBack";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import parse from "html-react-parser";

const DetailPengumuman = () => {
  const { id } = useParams();
  const [pengumuman, setPengumuman] = useState("");

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/pengumuman")).data.data;
    const detail = data.filter((a) => a.id == id)[0];
    setPengumuman(detail);
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
            <img src={pengumuman["image_url"]} className="img-fluid my-3" alt="Image" />
            {parse(pengumuman.content)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailPengumuman;
