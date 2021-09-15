import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useHistory } from "react-router";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: {
        id: userId,
      },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.innerText)
      .then((data) => goToMaker(data.user.uid))
      .catch((error) => console.log("오류"));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
