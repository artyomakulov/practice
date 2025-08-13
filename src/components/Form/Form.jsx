import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label>
            * Full name:
            <input
              type="text"
              name="name"
              placeholder="John Rosie"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            * Email:
            <input
              type="text"
              name="email"
              placeholder="johnrosie@gmail.com"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            * Phone:
            <input
              type="text"
              name="phone"
              placeholder="380961234567"
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" placeholder="Your message"></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
