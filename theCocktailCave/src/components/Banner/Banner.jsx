import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          A place to slow <br /> down together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          Calm setting for drinks and conversation.
        </motion.p>
      </div>

      <motion.div
        className="banner-image-container"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="https://res.cloudinary.com/dzo0dufcr/image/upload/v1780648491/Close-up_of_a_dimly_lit_202606051034_yzabyh.jpg"
          alt="Cocktails"
          className="banner-image"
        />
        <div className="banner-image-blur-overlay"></div>
      </motion.div>
    </section>
  );
};

export default Banner;
