import "./Carrousel.css";

import img from "/carrousel.png";
import img2 from "/carrousel2.jpg";
import img3 from "/carrousel3.jpg";
import img4 from "/carrousel4.jpg";
import img5 from "/carrousel5.jpg";
import img6 from "/carrousel6.jpg";

const Carrousel = () => {
  const images = [img, img2, img3, img4, img5, img6];

  const infiniteImages = [...images, ...images];

  return (
    <section className="carrousel-section">
      <div className="carrousel-header">
        <h2>Defined by light, sound, and time</h2>
        <p>Atmosphere shaped with care.</p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {infiniteImages.map((image, index) => (
            <div key={index} className="marquee-image-wrapper">
              <img
                src={image}
                alt={`Atmosphere ${index + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
