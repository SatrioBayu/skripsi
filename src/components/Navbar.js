import styles from "../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav class={`navbar navbar-expand-md ${styles["nav-bg"]} ${styles["nav-color"]}`}>
      <div class="container">
        <a class={`navbar-brand ${styles["no-padding"]}`} href="/">
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
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
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
          <div className="d-flex">
            <div className={`dropdown ${styles["nav-med"]}`}>
              <a href="#" data-bs-toggle="dropdown">
                Hi, Bayu
              </a>
              <ul class={`dropdown-menu ${styles["dropdown-menu"]}`}>
                <li>
                  <a class="dropdown-item" href="#">
                    Informasi Akun
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
