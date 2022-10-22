import React from "react";

import classes from "./Layout.module.css";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <main className={classes["container"]}>
      <h1 className={`${classes["app_name"]} secondary_heading`}>
        Password Generator
      </h1>
      {children}
    </main>
  );
}
