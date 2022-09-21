import styles from "../assets/css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../assets/css/Form.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const data = JSON.stringify({ username, password });
    localStorage.setItem("token", data);
    navigate("/");
  };

  const handleLogin = () => {
    if (!username) {
      setError("Username");
    } else if (!password) {
      setError("Password");
    }
  };

  return (
    <div className={`${styles["wrapper"]} ${styles["bg"]}`}>
      <div className={`${styles["isi"]} px-3 py-5`}>
        <h3 className={`fw-bold`}>Web RT Kelurahan Tulusrejo</h3>
        <p className={`${styles["secondary"]}`}>Login User</p>
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              required
              type="text"
              class={`form-control ${error === "Username" ? `${style["invalid"]}` : ""}`}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          {error === "Username" && <p className={`${style["invalid-text"]}`}>Username wajib diisi</p>}
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              required
              type="password"
              class={`form-control ${error === "Password" ? `${style["invalid"]}` : ""}`}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          {error === "Password" && <p className={`${style["invalid-text"]}`}>Password wajib diisi</p>}
          <button onClick={handleLogin} className={`btn ${styles["btn-login"]} px-4`}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
