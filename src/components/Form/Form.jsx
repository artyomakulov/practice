import React, { useState } from "react";
import css from "./Form.module.css";
import ArrowRight from "../../assets/images/arrow-right.svg?react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    const nameRegex = /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+$/;

    setIsInvalidName(newName === "" ? null : !nameRegex.test(newName));
    validateForm();
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    setIsValidEmail(newEmail === "" ? null : emailRegex.test(newEmail));
    setIsIncorrectEmail(!emailRegex.test(newEmail));
    validateForm();
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    const phoneRegex = /^\d{12}$/;
    setIsValidPhone(newPhone === "" ? null : phoneRegex.test(newPhone));
    validateForm();
  };

  const handleMessageChange = (e) => {
    const newMsg = e.target.value;
    setMessage(newMsg);
  };

  const validateForm = () => {
    setIsFormValid(
      name !== "" && !isInvalidName && email !== "" && isValidEmail
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Notify.success(`Hello amigo`);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    console.log(name, email, phone, message);
  };

  return (
    <div className={css.container}>
      <form className={css.form}>
        <div className={css.inputBlock}>
          <div className={css.inputContainer}>
            <label className={css.contact_type}>
              * Full name:
              <input
                type="text"
                name="name"
                value={name}
                placeholder="John Rosie"
                required
                onChange={handleNameChange}
                className={`${css.input} ${
                  isInvalidName === true
                    ? css.invalid
                    : isInvalidName === false
                    ? css.valid
                    : ""
                }`}
              />
            </label>
            {isInvalidName && (
              <div className={css.errorContainer}>
                <p className={css.errorMsg}>Wrong Fullname</p>
              </div>
            )}
          </div>
          <div className={css.inputContainer}>
            <label className={css.contact_type}>
              * Email:
              <input
                type="text"
                name="email"
                value={email}
                placeholder="johnrosie@gmail.com"
                required
                onChange={handleEmailChange}
                className={`${css.input} ${
                  isValidEmail === true
                    ? css.valid
                    : isValidEmail === false
                    ? css.invalid
                    : ""
                }`}
              />
            </label>
            {isIncorrectEmail && (
              <div className={css.errorContainer}>
                <p className={css.errorMsg}>Wrong email</p>
              </div>
            )}
          </div>
          <div className={css.inputContainer}>
            <label className={css.contact_type}>
              * Phone:
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="380961234567"
                required
                title="Enter a valid phone number (12 digits)"
                onChange={handlePhoneChange}
                className={`${css.input} ${
                  isValidPhone === true
                    ? css.valid
                    : isValidPhone === false
                    ? css.invalid
                    : ""
                }`}
              />
            </label>
            {isValidPhone === false && (
              <div className={css.errorContainer}>
                <p className={css.errorMsg}>Wrong Phone</p>
              </div>
            )}
          </div>
          <div>
            <label className={css.contact_type}>
              Message:
              <textarea
                name="message"
                placeholder="Your message"
                value={message}
                onChange={handleMessageChange}
                className={`${css.input} ${css.message}`}
              />
            </label>
          </div>
        </div>

        <div className={css.btnContainer}>
          <button
            className={css.btn}
            type="submit"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
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
