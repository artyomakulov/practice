import React from "react";
import css from "./Contacts.module.css";
import Phone from "../../assets/images/call.svg?react";
import Email from "../../assets/images/sms.svg?react";
import Map from "../../assets/images/map.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Instagram from "../../assets/images/instagram.svg?react";

const Contacts = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Contact us</h3>
      <div className={css.contacts_section}>
        <div className={css.contacts_block}>
          <p className={css.contact_type}>Phone:</p>
          <a href="tel:+380981234567" className={css.contacts_item}>
            <Phone />
            38 (098) 12 34 567
          </a>
          <a href="tel:+380981234568" className={css.contacts_item}>
            <Phone />
            38 (098) 12 34 568
          </a>
        </div>
        <div className={css.contacts_block}>
          <p className={css.contact_type}>Email:</p>
          <a href="mailto:office@ecosolution.com" className={css.contacts_item}>
            <Email />
            office@ecosolution.com
          </a>
        </div>
        <div className={css.contacts_block}>
          <p className={css.contact_type}>Address:</p>
          <p className={css.contacts_item}>
            <Map />
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
        </div>
        <div>
          <p>Social networks</p>
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
