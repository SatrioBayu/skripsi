import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPengumuman from "./pages/DetailPengumuman";
import DetailArtikel from "./pages/DetailArtikel";
import Peraturan from "./pages/Peraturan";
import ListPengumuman from "./pages/ListPengumuman";
import ListArtikel from "./pages/ListArtikel";
import SuratSaya from "./pages/SuratSaya";
import BelumLogin from "./pages/BelumLogin";
import PengajuanSurat from "./pages/PengajuanSurat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pengumuman/1" element={<DetailPengumuman />} />
          <Route path="/artikel/1" element={<DetailArtikel />} />
          <Route path="/peraturan" element={<Peraturan />} />
          <Route path="/pengumuman" element={<ListPengumuman />} />
          <Route path="/artikel" element={<ListArtikel />} />
          <Route path="/suratsaya" element={<SuratSaya />} />
          <Route path="/belumLogin" element={<BelumLogin />} />
          <Route path="/ajukanSurat" element={<PengajuanSurat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
