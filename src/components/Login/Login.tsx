import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const Login: React.FC = () => {
  const { setAuth } = useContext(AuthContext) as any;
  const LOGIN_URL = "/api/account/login";

  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const tryLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUsername("");
      setPassword("");
      setSuccess(true);
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const roles: any[] = [];
      setAuth({ email, password, roles, accessToken });
    } catch (error) {
      setErrorMessage("Error occured");
      errorRef?.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br></br>
          <p>
            <Link to="/">Go Home</Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={errorMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={tryLogin}>
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={email}
              required
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
            <button>Sign In</button>
          </form>
          <p>
            Need an Account? <br></br>
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
