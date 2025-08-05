import React from "react";
import mainphoto from "../../assets/images/wind-turbine-clean-energy.png";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.section}>
      <div className={css.image}>
        <img src={mainphoto} alt="wind turbine" className={css.photo} />
      </div>
      <div className={css.textSection}>
        <div>
          <h2 className={css.title}>Main values of our company</h2>
        </div>
        <div>
          <p className={css.text}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
