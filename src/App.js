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
import Protected from "./components/Protected";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pengumuman/:id" element={<DetailPengumuman />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
          <Route path="/peraturan" element={<Peraturan />} />
          <Route path="/pengumuman" element={<ListPengumuman />} />
          <Route path="/artikel" element={<ListArtikel />} />
          <Route
            path="/suratsaya"
            element={
              <Protected>
                <SuratSaya />
              </Protected>
            }
          />
          <Route path="/belumLogin" element={<BelumLogin />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/ajukanSurat"
            element={
              <Protected>
                <PengajuanSurat />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
