import React from "react";
import styles from "@/styles/dashboard.module.css";
import { MdOutlineOpenInNew } from "react-icons/md";

const Widget = ({ heading, children }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetHeader}>
        <p className={styles.widgetHeading}>{heading}</p>
        <p className={styles.widgetHeading}>
          <MdOutlineOpenInNew size={25} />
        </p>
      </div>

      <div className={styles.widgetList}>{children}</div>
    </div>
  );
};

export const WidgetItem = ({ children, className }) => {
  return <div className={`${styles.widgetItem} ${className}`}>{children}</div>;
};

export default Widget;
