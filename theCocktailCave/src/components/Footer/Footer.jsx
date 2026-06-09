import "./Footer.css";

const Footer = () => {
  // Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>The.Cocktail.Cave</p>
      <small>© {currentYear} The Cocktail Cave. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
