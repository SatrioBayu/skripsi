import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/SuratSaya.module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const SuratSaya = () => {
  const [surat, setSurat] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("https://pengmas.telenurse.web.id/api/v1/surat/index", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data.data;
      const sorted = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      sorted.map((data) => {
        const tanggal = new Date(data.created_at).getDate();
        const bulan = month[new Date(data.created_at).getMonth()];
        const tahun = new Date(data.created_at).getFullYear();
        const gabung = `${tanggal} ${bulan} ${tahun}`;
        const words = data.type.split("_").map((x) => x.toLowerCase());
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        data.type = words.join(" ");
        data.created_at = gabung;
      });
      setSurat(sorted);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div class={`container my-5 ${styles["height"]}`}>
        <h2 class="text-center">Pengajuan Surat Saya</h2>
        <p class="text-center">Anda dapat melihat riwayat dan status pengajuan surat</p>
        <div class="table-responsive-xl mt-5">
          <table class={`table align-middle table-striped ${styles["text"]}`}>
            <thead>
              <tr>
                <th scope="col" className={`${styles["w-30"]}`}>
                  Jenis Surat
                </th>
                <th scope="col" className={`${styles["w-20"]}`}>
                  Tanggal Pengajuan
                </th>
                <th scope="col" className={`text-center ${styles["w-20"]}`}>
                  Status
                </th>
                <th scope="col" className={`text-center ${styles["w-30"]}`}>
                  Keterangan
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr className="text-center">
                  <td colSpan={4} className="text-center">
                    <div class="spinner-grow" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {surat.map((data, index) => (
                    <tr key={index}>
                      <td>{data.type}</td>
                      <td>{data.created_at}</td>
                      {data.status === "DISETUJUI" && (
                        <td className="text-center">
                          <a className={`${styles["link"]}`} href={data.file_link} target="_blank" download={data.title}>
                            Disetujui
                          </a>
                        </td>
                      )}
                      {data.status === "PROSES" && <td className="text-center">Dalam Proses</td>}
                      {data.status === "DITOLAK" && <td className={`text-center ${styles.rejected}`}>Ditolak</td>}
                      <td className={`${styles.small}`}>{data.reject_reason}</td>
                    </tr>
                  ))}
                </>
              )}

              {/* <tr>
                <td>Surat Pengantar Menikah</td>
                <td className="text-center">
                  <a className={`${styles["link"]}`} href="/Surat Pengantar Nikah.docx" target="_blank" download="Coba.docx">
                    Disetujui
                  </a>
                </td>
                <td className="text-center">-</td>
              </tr>
              <tr>
                <td>Surat Persetujuan Tetangga</td>
                <td className={`text-center ${styles.rejected}`}>Ditolak</td>
                <td class={`${styles.small}`}>File surat yang anda upload tidak sesuai dengan jenis surat yang anda minta.</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuratSaya;
