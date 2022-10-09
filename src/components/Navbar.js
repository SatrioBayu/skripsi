import { useEffect, useState } from "react";
import styles from "../assets/css/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  const [nama, setNama] = useState("");
  const [isLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    // setNama(token.username);
    const res = await axios.get("https://pengmas.mides.id/api/v1/self-information", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const nama = res.data.data.name;
    setNama(nama);
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
    // <nav class={`navbar navbar-expand-md ${styles["nav-bg"]} ${styles["nav-color"]}`}>
    //   <div class="container-lg">
    //     <a class={`me-5 ${styles["no-padding"]} fw-bold`} href="/">
    //       Web RT Tulusrejo
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class={`navbar-toggler-icon ${styles["nav-burger"]}`}></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="/ajukanSurat">
    //             Ajukan Surat Online
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="/suratsaya">
    //             Surat Saya
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link active" href="/peraturan">
    //             Peraturan
    //           </a>
    //         </li>
    //       </ul>
    //       <div className={`d-flex`}>
    //         {isLoggedIn ? (
    //           <div className={`dropdown`}>
    //             <a href="#" data-bs-toggle="dropdown">
    //               Hi, {nama.split(" ").sort((a, b) => a.length - b.length)[0]}
    //             </a>
    //             {/* <a href="#" data-bs-toggle="dropdown">
    //               Hi, {nama}
    //             </a> */}
    //             <ul class={`dropdown-menu ${styles["dropdown-menu"]}`}>
    //               <li>
    //                 <a class="dropdown-item" href="/profile">
    //                   Informasi Akun
    //                 </a>
    //               </li>
    //               <li>
    //                 <a onClick={handleLogout} class="dropdown-item" href="/">
    //                   Logout
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         ) : (
    //           <ul className="navbar-nav">
    //             <li className="navbar-item">
    //               <a href="/login" className="nav-link active">
    //                 Login
    //               </a>
    //             </li>
    //           </ul>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    // Coba
    <nav class={`navbar navbar-expand-md ${styles["nav-bg"]} ${styles["nav-color"]}`}>
      <div class="container-lg">
        <a class={`${styles["no-padding"]} fw-bold`} href="/">
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
        <div class="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class={`nav-link ${styles["navbar-item"]}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${styles["navbar-item"]}`} href="/ajukanSurat">
                Ajukan Surat Online
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${styles["navbar-item"]}`} href="/suratsaya">
                Surat Saya
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${styles["navbar-item"]}`} href="/peraturan">
                Peraturan
              </a>
            </li>
            {isLoggedIn ? (
              <div className={`${styles["nav-mobile"]}`}>
                <li className="nav-item">
                  <a class={`${styles["navbar-item"]} nav-link`} href="/profile">
                    Informasi Akun
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={handleLogout} class={`${styles["navbar-item"]} nav-link`} href="/">
                    <span id="basic-addon1">
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      &nbsp;&nbsp;
                    </span>
                    Logout
                  </a>
                </li>
              </div>
            ) : (
              <ul className={`navbar-nav ${styles["nav-mobile"]}`}>
                <li className="nav-item">
                  <a href="/login" className="nav-link active">
                    Login
                  </a>
                </li>
              </ul>
            )}
          </ul>
        </div>
        <div className={`d-flex ${styles["info"]}`}>
          {isLoggedIn ? (
            <div className={`dropdown`}>
              <a href="#" className={`${styles["navbar-item"]} fw-bold`} data-bs-toggle="dropdown">
                Hi, {nama.split(" ").sort((a, b) => a.length - b.length)[0]}
                {/* Hi */}
              </a>
              <ul class={`dropdown-menu ${styles["dropdown-menu"]}`}>
                <li>
                  <a class={`dropdown-item ${styles["navbar-item"]}`} href="/profile">
                    Informasi Akun
                  </a>
                </li>
                <li>
                  <a onClick={handleLogout} class={`dropdown-item ${styles["navbar-item"]}`} href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a href="/login" className={`nav-link fw-bold`}>
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
