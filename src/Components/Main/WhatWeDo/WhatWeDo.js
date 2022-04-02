import React from "react";
import "./what.css";

const WhatWeDo = () => {
  return (
    <>
      {/* =================== Header ===================*/}
      <section className="what container" id="what-we-do">
        <article className="what__article">
          <h2 className="what__article--title">What We Do</h2>
          <p className="what__article--para">
            This is Infinite Loop, free Bootstrap 4.0 HTML template with a
            parallax effect. This layout is what you can modify and use for your
            websites. Please spread a word to your friends about our website.
            Thank you for supporting us. If you have any question, you can
            contact us or chat with us on our
            <a href="#">Tooplate Facebook page.</a>
          </p>
        </article>

        {/* =================== Content ===================*/}
        <div className="what__content">
          {/* =================== row-1 ===================*/}
          <div className="row-1">
            <article className="what__article content__article">
              <i className="far fa-3x fa-chart-bar text-center tm-icon what__article--title"></i>

              <div>
                <h2 className="what__article--title">Market Analysis</h2>
                <p className="what__article--para">
                  Praesent sed pharetra lorem, blandit convallis mi. Aenean
                  ornare elit ac metus lacinia, sed iaculis nibh semper.
                  Pellentesque est urna.
                </p>
              </div>
            </article>

            <article className="what__article content__article">
              <i className="far fa-3x fa-comment-alt text-center tm-icon what__article--title"></i>

              <div>
                <h2 className="what__article--title">Fast Support</h2>
                <p className="what__article--para">
                  Credit goes to Pexels website for all images used in this
                  template. Cras condimentum mi et sapien dignissim luctus.
                </p>
              </div>
            </article>
          </div>

          {/* =================== row-2 ===================*/}
          <div className="row-2">
            <article className="what__article content__article">
              <i className="fas fa-3x fa-fingerprint text-center tm-icon"></i>

              <div>
                <h2 className="what__article--title">Top Security</h2>
                <p className="what__article--para">
                  You have no authority to post this template as a ZIP file on
                  your template collection websites. You can use this template
                  for your commercial websites.
                </p>
                <button className="what__article--btn">Learn More</button>
              </div>
            </article>

            <article className="what__article content__article">
              <i className="fas fa-3x fa-users text-center tm-icon"></i>

              <div>
                <h2 className="what__article--title">Social Work</h2>
                <p className="what__article--para">
                  Praesent sed pharetra lorem, blandit convallis mi. Aenean
                  ornare elit ac metus lacinia, sed iaculis nibh semper.
                  Pellentesque est urna.
                </p>
                <button className="what__article--btn">Details</button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
