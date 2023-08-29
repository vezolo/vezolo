import React from "react";
import styles from "@/styles/overlap.module.css";

const Overlap = ({ items }) => {
  return (
    <div className={`flex-rowAC ${styles.overlapContainer}`}>
      {items?.map((item, i) => {
        return (
          <div
            key={i}
            className={styles.overlapItem}
            style={{
              left: i * 11,
              zIndex: Math.floor((items?.length * 10) / (i + 1)),
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Overlap;
