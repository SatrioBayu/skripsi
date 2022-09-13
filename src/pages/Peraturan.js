import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBack from "../components/ArrowBack";
import styles from "../assets/css/Peraturan.module.css";

const Peraturan = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="main">
      <Navbar />
      <div class="container mt-5">
        <ArrowBack handleBack={handleBack} />

        <div id="peraturan" className="mb-5">
          <h2 className="text-center my-5">Peraturan RT 04 RW 12 Kelurahan Tulusrejo</h2>
          <ol className={`${styles["no-padding"]}`}>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
            <li className="fs-6">
              <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in impedit consequatur modi perferendis sint. Beatae nulla, repudiandae necessitatibus laborum, quo, non nemo excepturi
                dolor ullam molestias temporibus sequi commodi!
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Peraturan;
