import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  return (
    <animated.div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img className={Styles.caraImg} src={imagen} alt="img" />
    </animated.div>
  );
}

export default Card;
