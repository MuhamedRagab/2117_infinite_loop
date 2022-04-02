import React from "react";
import TestimonialsSwipper from "./TestimonialsSwipper";
import image1 from "../../../img/testimonial-img-01.jpg";
import image2 from "../../../img/testimonial-img-02.jpg";
import image3 from "../../../img/testimonial-img-03.jpg";
import image4 from "../../../img/testimonial-img-04.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  const swiperData = [
    {
      id: 1,
      image: image1,
      description:
        "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
      jop: "Catherine Win (Designer)",
    },
    {
      id: 2,
      image: image2,
      description:
        "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
      jop: "Catherine Win (Designer)",
    },
    {
      id: 3,
      image: image3,
      description:
        "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
      jop: "Catherine Win (Designer)",
    },
    {
      id: 4,
      image: image4,
      description:
        "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
      jop: "Catherine Win (Designer)",
    },
    {
      id: 5,
      image: image2,
      description:
        "This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.",
      jop: "Catherine Win (Designer)",
    },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <article className="testimonials__article">
          <h2 className="testimonials__article--title">Testimonials</h2>
          <p style={{ width: "50%" }} className="testimonials__article--para">
            Nulla dictum sem non eros euismod, eu placerat tortor lobortis.
            Suspendisse id velit eu libero pellentesque interdum. Etiam quis
            congue eros.
          </p>
        </article>
      </div>

      <TestimonialsSwipper swiperData={swiperData} />
    </section>
  );
};

export default Testimonials;
