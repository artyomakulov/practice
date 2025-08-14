import React from "react";
import css from "./Form.module.css";
import ArrowRight from "../../assets/images/arrow-right.svg?react";

const Form = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <div className={css.inputContainer}>
          <div>
            <label className={css.contact_type}>
              * Full name:
              <input
                type="text"
                name="name"
                placeholder="John Rosie"
                required
                className={css.input}
              />
            </label>
          </div>
          <div>
            <label className={css.contact_type}>
              * Email:
              <input
                type="text"
                name="email"
                placeholder="johnrosie@gmail.com"
                required
                className={css.input}
              />
            </label>
          </div>
          <div>
            <label className={css.contact_type}>
              * Phone:
              <input
                type="text"
                name="phone"
                placeholder="380961234567"
                required
                className={css.input}
              />
            </label>
          </div>
          <div>
            <label className={css.contact_type}>
              Message:
              <textarea
                name="message"
                placeholder="Your message"
                className={`${css.input} ${css.message}`}
              />
            </label>
          </div>
        </div>

        <div className={css.btnContainer}>
          <button className={css.btn}>
            <span className={css.btnText}>Send</span>
            <span className={css.wrapArrow}>
              <ArrowRight className={css.arrow} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
