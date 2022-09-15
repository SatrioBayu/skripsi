import styles from "../assets/css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = JSON.stringify({ username, password });
    localStorage.setItem("token", data);
    navigate("/");
  };

  return (
    <div className={`${styles["wrapper"]} ${styles["bg"]}`}>
      <div className={`${styles["isi"]} px-3 py-5`}>
        <h3 className={`fw-bold`}>Web RT Kelurahan Tulusrejo</h3>
        <p className={`${styles["secondary"]}`}>Login User</p>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input required type="text" class="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input required type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <button onClick={handleLogin} className={`btn ${styles["btn-login"]} px-4`}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
