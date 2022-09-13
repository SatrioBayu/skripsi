import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPengumuman from "./pages/DetailPengumuman";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pengumuman/1" element={<DetailPengumuman />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
