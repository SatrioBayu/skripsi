import ArrowBack from "../components/ArrowBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DetailPengumuman = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <ArrowBack handleBack={handleBack} />
        <div id="pengumuman" className="mb-5">
          <h2>Judul Pengumuman</h2>
          <img
            src="https://img.freepik.com/premium-vector/loudspeaker-megaphone-bullhorn-yellow-background-empty-banner-template-promotion-design_578506-256.jpg?w=2000"
            className="img-fluid my-3"
            alt="Image"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odio voluptatum animi alias fugit sint eos excepturi quam esse? Quasi quis qui officia laudantium quaerat unde, hic
            repellat dolore numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis culpa quasi nihil. Laudantium et accusamus cumque, quas est vel, quo autem rerum sit officiis iste,
            sed alias hic. Nisi, voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sed assumenda dolor voluptas at maxime fugiat doloremque dolorum, praesentium quo
            placeat sapiente sint a illum veritatis. Dolorem rem corporis itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eligendi qui blanditiis alias adipisci illo eos ullam,
            voluptatum placeat sint sequi corrupti nihil cum cumque mollitia laborum omnis aut tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem perferendis
            eos tempora ipsa enim fugit necessitatibus eaque consequuntur dolores beatae, est ullam, amet soluta harum et provident, eveniet voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut esse quibusdam molestias commodi dolores laudantium deleniti libero sunt aliquid perspiciatis dolore cum officia id natus, cumque, minima beatae accusamus? Temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt dolor illo obcaecati nam corrupti animi adipisci quia, recusandae vero magnam doloremque aut laudantium. Rerum
            itaque reiciendis laboriosam omnis maiores!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPengumuman;
