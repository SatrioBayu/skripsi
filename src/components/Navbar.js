import { useEffect, useState } from "react";
import styles from "../assets/css/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nama, setNama] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const navigate = useNavigate();

  const fetchData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    setNama(token.username);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, []);

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
              <a class="nav-link active" href="/ajukanSurat">
                Ajukan Surat Online
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/suratsaya">
                Surat Saya
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/peraturan">
                Peraturan
              </a>
            </li>
          </ul>
          <div className="d-flex">
            {isLoggedIn ? (
              <div className={`dropdown ${styles["nav-med"]}`}>
                <a href="#" data-bs-toggle="dropdown">
                  Hi, {nama}
                </a>
                <ul class={`dropdown-menu ${styles["dropdown-menu"]}`}>
                  <li>
                    <a class="dropdown-item" href="/profile">
                      Informasi Akun
                    </a>
                  </li>
                  <li>
                    <a onClick={handleLogout} class="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <a href="/login" className="nav-link active">
                    Login
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
