import React from "react";
import styles from "../nav/nav.module.css";
import { Button } from "@mui/material";
const Nav = () => {
  return (
    <div className={styles.nave}>
<Button variant="text">ONEPIRATE</Button>
<Button variant="text">SING IN</Button>
<Button variant="text"
color="error">SING UP</Button>
    </div>
  );
};

export default Nav;
