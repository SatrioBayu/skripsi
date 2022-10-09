import styles from "../assets/css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../assets/css/Form.module.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // const data = JSON.stringify({ username, password });
    // localStorage.setItem("token", data);
    // navigate("/");
    e.preventDefault();
    const body = {
      email,
      password,
    };
    setLoading(true);
    try {
      const res = await axios.post("https://pengmas.mides.id/api/v1/auth/login", body);
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      setInvalid("");
      navigate("/");
      setLoading(false);
    } catch (error) {
      setInvalid("Email atau Password Salah");
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (!email) {
      setError("Email");
    } else if (!password) {
      setError("Password");
    }
  };

  return (
    <div className={`${styles["wrapper"]} ${styles["bg"]}`}>
      <div className={`${styles["isi"]} px-3 py-5`}>
        <h3 className={`fw-bold`}>Web RT Kelurahan Tulusrejo</h3>
        <p className={`${styles["secondary"]}`}>Login User</p>
        {invalid && (
          <div class="alert alert-danger" role="alert">
            {invalid}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              required
              type="email"
              class={`form-control ${error === "Email" ? `${style["invalid"]}` : ""}`}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          {error === "Email" && <p className={`${style["invalid-text"]}`}>Email wajib diisi</p>}
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
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          {error === "Password" && <p className={`${style["invalid-text"]}`}>Password wajib diisi</p>}
          {loading ? (
            <button className={`btn ${styles["btn-login"]} px-4`} type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          ) : (
            <button onClick={handleLogin} className={`btn ${styles["btn-login"]} px-4`}>
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
