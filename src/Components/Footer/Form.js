import React from "react";

function Form() {
  return (
    <div className="contact__content">
      <div className="contact__content--form">
        <fieldset>
          <input name="userName" type="text" placeholder="Your Name" required />
          <input name="Email" type="Email" placeholder="Your Email" required />
        </fieldset>
        <textarea placeholder="Message" />
        <button>Submit</button>
      </div>
      <div className="contact__content--icons">
        <ul>
          <li>
            <a href="#">
              <i className="far fa-2x fa-comment mr-4 icon"></i>
              <span>Chat Online </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-2x fa-envelope mr-4 icon"></i>
              <span>mail@company.com </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-2x fa-map-marker-alt mr-4 icon"></i>
              <span>Our Location </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-2x fa-phone-square mr-4 icon"></i>
              <span>255-662-5566 </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
