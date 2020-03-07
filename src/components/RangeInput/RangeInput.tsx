import React from "react";

import styles from "./styles.module.scss";
import { IProps } from "./types";

export const RangeInput = ({
  name,
  min = 0,
  max = 100,
  step = 1,
  value = "",
  label = "",
  onChange,
  hideLabel = false,
}: IProps) => {
  return (
    <div className={styles.rangeInput}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {!hideLabel && <label htmlFor={name}>{label || name}</label>}
    </div>
  );
};

export default RangeInput;
