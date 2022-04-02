import React from "react";
import Form from "./Form";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <footer className="contact" id="contact">
      <div className="container">
        <article className="contact__article">
          <h2 className="contact__article--title">ContactUs</h2>
          <p className="contact__article--para">
            Proin enim orci, tincidunt quis suscipit in, placerat nec est.
            Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo
            blandit egestas. Nulla id posuere felis, quis tristique nulla.
          </p>
        </article>

        {/* =============== Form ========= */}
        <Form />
        <h4 className="copy-right">
          Copyright © 2020 Company Name . Designed by TOOPLATE
        </h4>
      </div>
    </footer>
  );
};

export default ContactUs;
