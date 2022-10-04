import { useState } from "react";
import ButtonLainnya from "./ButtonLainnya";
import CardArtikel from "./CardArtikel";
import axios from "axios";
import { useEffect } from "react";

const Artikel = () => {
  const [artikels, setArtikels] = useState("");

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/berita")).data.data;
    setArtikels(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="container-fluid">
      <div class="my-4 d-flex flex-column align-items-center">
        <h4 className="fw-bold">Artikel</h4>
        <hr />
      </div>
      <div class="row g-4">
        {artikels &&
          artikels.map((artikel) => (
            <div key={artikel.id} class="d-flex justify-content-center col-sm-6 col-lg-4">
              <CardArtikel data={artikel} />
            </div>
          ))}
        {/* <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardArtikel />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardArtikel />
        </div> */}
      </div>
      <ButtonLainnya text="Artikel Lainnya" destination="artikel" />
    </div>
  );
};

export default Artikel;
