import { useState } from "react";
import ButtonLainnya from "./ButtonLainnya";
import CardPengumuman from "./CardPengumuman";
import axios from "axios";
import { useEffect } from "react";

const Pengumuman = () => {
  const [announcements, setAnnouncements] = useState("");

  const fetchData = async () => {
    const data = await (await axios.get("https://pengmas.mides.id/api/v1/pengumuman")).data.data;
    setAnnouncements(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="container-fluid">
      <div class="my-4 d-flex flex-column align-items-center">
        <h4 className="fw-bold">Pengumuman</h4>
        <hr />
      </div>
      <div class="row g-4">
        {announcements &&
          announcements.map((announcement) => (
            <div key={announcement.id} class="d-flex justify-content-center col-sm-6 col-lg-4">
              <CardPengumuman data={announcement} />
            </div>
          ))}
        {/* <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardPengumuman />
        </div>
        <div class="d-flex justify-content-center col-sm-6 col-lg-4">
          <CardPengumuman />
        </div> */}
      </div>
      <ButtonLainnya text="Pengumuman Lainnya" destination="pengumuman" />
      <div class="container">
        <hr className="separate" />
      </div>
    </div>
  );
};

export default Pengumuman;
