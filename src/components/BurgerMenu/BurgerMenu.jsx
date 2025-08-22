import React from "react";
import css from "./BurgerMenu.module.css";
import Close from "../../assets/images/close.svg?react";
import BurgerArrow from "../../assets/images/burger-arrow.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Instagram from "../../assets/images/instagram.svg?react";
import { Link } from "react-scroll";

const BurgerMenu = () => {
  return (
    <div className={css.burgerContainer}>
      <div className={css.burgerMenu}>
        <button className={css.btnClose}>
          <Close />
          <span>close</span>
        </button>
        <div className={css.menu}>
          <ul className={css.menuList}>
            <li>
              <Link
                to="main"
                smooth={true}
                duration={1000}
                className={css.list_item}
              >
                Main
                <BurgerArrow />
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className={css.list_item}
              >
                About <BurgerArrow />
              </Link>
            </li>
            <li>
              <Link
                to="cases"
                smooth={true}
                duration={1000}
                className={css.list_item}
              >
                Cases <BurgerArrow />
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={1000}
                className={css.list_item}
              >
                FAQ <BurgerArrow />
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                duration={1000}
                className={css.list_item}
              >
                Contact Us <BurgerArrow />
              </Link>
            </li>
          </ul>
          <div className={css.socials}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className={css.social} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className={css.social} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
