import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPengumuman from "./pages/DetailPengumuman";
import DetailArtikel from "./pages/DetailArtikel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pengumuman/1" element={<DetailPengumuman />} />
          <Route path="/artikel/1" element={<DetailArtikel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
