import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact">
      <h5>FOR CONTACTING US</h5>
      <input
        id="NewsletterForm--sections--19105158758683__footer"
        type="email"
        name="contact[email]"
        class="field__input"
        value=""
        aria-required="true"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="email"
        placeholder="Email"
        required=""
      />
      <FaInstagram className="icon" color="white" size={25} />
    </div>
  );
}

export default Contact;
