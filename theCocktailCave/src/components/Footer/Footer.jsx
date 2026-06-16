import "./Footer.css";

const Footer = () => {
  // Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h6>The.Cocktail.Cave</h6>
      <small>© {currentYear} The Cocktail Cave. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
