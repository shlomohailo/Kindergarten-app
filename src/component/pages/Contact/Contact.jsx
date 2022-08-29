import "./Contact.css";
import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form id="form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Text-Area:
          <input type="text" name="name" />
        </label>
        <input id="submit_btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
