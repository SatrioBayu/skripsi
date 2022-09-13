import Artikel from "./components/Artikel";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Pengumuman from "./components/Pengumuman";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Pengumuman />
      <Artikel />
    </div>
  );
}

export default App;
