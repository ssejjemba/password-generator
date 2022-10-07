import React, { ChangeEvent, useEffect } from "react";

export function useChromeSlider(ref: React.RefObject<HTMLInputElement>) {
  function updateStyleAttribute(e?: Event) {
    if (!ref.current) {
      return;
    }
    let value = +ref.current.defaultValue;

    if (e) {
      const target = e.target as HTMLInputElement;
      value = +target.value;
    }

    const min = +ref.current?.min || 0;
    const max = +ref.current?.max || 100;
    if (value || value === 0) {
      const percentRaw = ((value - min) / (max - min)) * 100;
      const percent = +percentRaw.toFixed(2);

      ref.current.style.setProperty("--percent", `${percent}%`);
    }
  }

  useEffect(() => {
    if (ref.current) {
      updateStyleAttribute();
      ref.current.addEventListener("input", updateStyleAttribute);
    }
  }, []);
}
