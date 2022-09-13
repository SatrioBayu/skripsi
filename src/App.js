import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPengumuman from "./pages/DetailPengumuman";
import DetailArtikel from "./pages/DetailArtikel";
import Peraturan from "./pages/Peraturan";
import ListPengumuman from "./pages/ListPengumuman";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
