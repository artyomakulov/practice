import React, { useState } from "react";
import css from "./Electricity.module.css";

const Electricity = () => {
  const [electricityCount, setElectricityCount] = useState(1134147814);

  useState(() => {
    const interval = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={css.section}>
      <h2 className={css.title}>Electricity we produced for all time</h2>
      <div className={css.divider}></div>
      <div className={css.counter}>
        <p className={css.text}>{formatNumberWithCommas(electricityCount)}</p>
        <span className={css.text2}>kWh</span>
      </div>
    </div>
  );
};

export default Electricity;
