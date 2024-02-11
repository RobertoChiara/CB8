import React from "react";
import styles from "@/styles/Legend.module.scss";

const Legend = () => {
  return (
    <div className={styles.legend}>
      <p>Density: </p>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgba(33,102,172,0.8)",
            marginRight: 5,
          }}
        ></span>
        <span>0.1</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(33,102,172)",
            marginRight: 5,
          }}
        ></span>
        <span>0.2</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(103,169,207)",
            marginRight: 5,
          }}
        ></span>
        <span>0.4</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(209,229,240)",
            marginRight: 5,
          }}
        ></span>
        <span>0.6</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(253,219,199)",
            marginRight: 5,
          }}
        ></span>
        <span>0.8</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(239,138,98)",
            marginRight: 5,
          }}
        ></span>
        <span>0.9</span>
      </div>
      <div className={styles.legendchart}>
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 20,
            backgroundColor: "rgb(255,201,101)",
            marginRight: 5,
          }}
        ></span>
        <span>1.0</span>
      </div>
    </div>
  );
};

export default Legend;
