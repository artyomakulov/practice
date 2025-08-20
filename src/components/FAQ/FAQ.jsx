import React, { useState } from "react";
import faqData from "./data";
import css from "./FAQ.module.css";
import Minus from "../../assets/images/minus.svg?react";
import Add from "../../assets/images/add.svg?react";
import ArrowUp from "../../assets/images/arrow-down.svg?react";
import { Link } from "react-scroll";

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={css.section}>
      <h3 className={css.title}>Frequently Asked Questions</h3>
      <ul className={css.faqSection}>
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li key={item.id} className={css.item}>
              <div
                className={css.questionBlock}
                onClick={() => toggleQ(item.id)}
              >
                <span className={css.toggleSign}>
                  {isOpen ? <Minus /> : <Add />}
                </span>
                <p className={css.question}>{item.question}</p>
              </div>
              <p className={`${css.answer} ${isOpen ? css.open : ""}`}>
                {item.answer}
              </p>{" "}
            </li>
          );
        })}
      </ul>
      <div className={css.afterBlock}>
        <p className={css.afterText}>
          Didn't find the answer to your question?
        </p>
        <Link to="contacts" smooth={true} duration={1000}>
          <button className={css.btn}>
            <span className={css.btnText}>Contact Us</span>
            <ArrowUp className={css.arrow} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
