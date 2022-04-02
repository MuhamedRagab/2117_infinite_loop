import React from "react";
import "./gallery.css";
import GallerySwipper from "./GallerySwipper";
import image1 from "../../../img/gallery-img-01.jpg";
import image2 from "../../../img/gallery-img-02.jpg";
import image3 from "../../../img/gallery-img-03.jpg";
import image4 from "../../../img/gallery-img-04.jpg";
import image5 from "../../../img/gallery-img-05.jpg";
import image6 from "../../../img/gallery-img-06.jpg";

const galleryData = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 1, image: image1 },
  { id: 2, image: image2 },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <article className="gallery__article">
          <h2 className="gallery__article--title">Gallery</h2>
          <p className="gallery__article--para">
            Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare
            elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est
            urna, lobortis eu arcu a, aliquet tristique urna.
          </p>
        </article>
        <GallerySwipper galleryData={galleryData} />
      </div>
    </section>
  );
};

export default Gallery;
