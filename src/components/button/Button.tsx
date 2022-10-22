import React from "react";

import classes from "./Button.module.css";

// For this application, I only have one button so I'll not try to make it general purpose.
// Can be refactored later to be reusable

export default function Button() {
  return (
    <button className={classes["button"]}>
      <span className={classes["text"]}>Generate</span>
      <svg
        className={classes["icon"]}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z" />
      </svg>
    </button>
  );
}
