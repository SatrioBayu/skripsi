import styles from "../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav class={`navbar navbar-expand-lg ${styles["nav-bg"]} ${styles["nav-color"]}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Web RT Tulusrejo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class={`navbar-toggler-icon ${styles["nav-burger"]}`}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Ajukan Surat Online
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Surat Saya
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Peraturan
              </a>
            </li>
          </ul>

          {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex">
            <a href="#">Hi, Bayu</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
