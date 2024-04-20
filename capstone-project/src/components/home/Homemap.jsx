import React from "react";
import { Viewer } from "resium";

const styles = {
  card: {
    position: "relative",
    top: "-490px",
    left: "750px",
    width: "400px",
    height: "400px",
    backgroundColor: "#2d2d2d",
    borderRadius: "24px",
    overflow: "hidden",
  },
  viewer: {
    width: "100%",
    height: "100%",
  },
};

const Card = () => {
  return (
    <a href='./Map'>
    <div style={styles.card}>
      <div style={styles.viewer}>
        <Viewer full />
      </div>
    </div>
    </a>
  );
};

export default Card;
