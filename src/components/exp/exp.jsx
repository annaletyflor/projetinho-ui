import React from "react";
import styles from "../../components/exp/exp.module.css";
import mulherpiscina from "../../assets/piscina.png";
import { Button, styled } from "@mui/material";
import guardasol from "../../assets/sol.svg";
import timao from "../../assets/navio.svg";
import camera from "../../assets/cam.svg";
import fundotext from "../../assets/fundotexto.png";

const Exp = () => {
  const BtnStyled = styled(Button)({
    color: "#fff",
    fontSize: "25px",
    background: "linear-gradient(45deg, #FF3366, #FF3366)",
    fontFamily: "Roboto Condensed"
  });

  return (
    <>
      <div className={styles.agua}>
        <img src={mulherpiscina} alt="Mulher na Piscina" />
      </div>
      <div className={styles.sunday}>
        <h1>UPGRADE YOUR SUNDAYS</h1>
        <h4>
          Enjoy secret offers up to -70% off the best luxury hotels every
          Sunday.
        </h4>
        <BtnStyled variant="contained">Register</BtnStyled>
        <p>Discover the experience</p>
      </div>
      <div className={styles.sobre}>
        <img src={fundotext} alt="" />

        <div className={styles.icontext}>
          <img src={guardasol} alt="" />
          <img src={timao} alt="" />
          <img src={camera} alt="" />
        </div>
        <div className={styles.titulo}>
          <h4>The best luxury hotels</h4>
          <h4>New experiences</h4>
          <h4>Exclusive rates</h4>
        </div>
        <div className={styles.texto}>
          <p>
            From the latest trendy boutique hotel to the iconic palace with XXL
            pool, go for a mini-vacation just a few subway stops away from your
            home.
          </p>
          <p>
            Privatize a pool, take a Japanese bath or wake up in 900m2 of
            garden… your Sundays will not be alike.
          </p>
          <p>
            By registering, you will access specially negotiated rates anywhere
            else.
          </p>
        </div>
      </div>
    </>
  );
};

export default Exp;
