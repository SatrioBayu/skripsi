import ButtonLainnya from "./components/ButtonLainnya";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <div class="container-fluid">
        <div class="my-4 d-flex flex-column align-items-center">
          <h3>Pengumuman</h3>
          <hr />
        </div>
        <div class="row g-4">
          <div class="d-flex justify-content-center col-sm-6 col-lg-4">
            <Card />
          </div>
          <div class="d-flex justify-content-center col-sm-6 col-lg-4">
            <Card />
          </div>
          <div class="d-flex justify-content-center col-sm-6 col-lg-4">
            <Card />
          </div>
        </div>
        <ButtonLainnya text="Pengumuman Lainnya" />
      </div>
    </div>
  );
}

export default App;
