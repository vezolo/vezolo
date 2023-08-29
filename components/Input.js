"use client";

import React, { useRef, useState } from "react";
import styles from "@/styles/input.module.css";

const Input = ({ placeholder, value, setValue, ...otherProps }) => {
  const [onFocus, setOnFocus] = useState(false);

  const inputRef = useRef(null);
  return (
    <div className={styles.container}>
      <button
        className={styles.heading}
        style={Object.assign(
          {},
          value
            ? {
                transform: "translate(-.5rem, -2rem) scale(0.8)",
              }
            : onFocus && {
                transform: "translate(-.5rem, -2rem) scale(0.8)",
              }
        )}
        onClick={() => inputRef?.current?.focus()}
      >
        <label
          htmlFor={placeholder}
          style={Object.assign(
            {},

            value
              ? {
                  color: "#0069ff",
                }
              : onFocus
              ? {
                  color: "#0069ff",
                }
              : {
                  color: "#ccc",
                }
          )}
        >
          {placeholder}
        </label>
      </button>
      <input
        ref={inputRef}
        name={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={styles.input}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
