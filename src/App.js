import Artikel from "./components/Artikel";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PengajuanSuratHome from "./components/PengajuanSuratHome";
import Pengumuman from "./components/Pengumuman";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Pengumuman />
      <Artikel />
      <PengajuanSuratHome />
      <Footer />
    </div>
  );
}

export default App;
