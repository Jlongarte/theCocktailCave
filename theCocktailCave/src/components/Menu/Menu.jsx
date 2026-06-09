import { useNavigate } from "react-router-dom";
import "./Menu.css";

const drinks = [
  {
    id: 1,
    name: "Espresso Martini",
    price: "$14",
    desc: "Gin, grapefruit, light salinity.",
    img: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1765624189/Martini_Espresso_zrchr5.webp",
  },
  {
    id: 2,
    name: "Tequila Sunrise",
    price: "$14",
    desc: "Served straight, clean finish.",
    img: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1765624190/Tequila_Sunrise_jn1xrt.webp",
  },
  {
    id: 3,
    name: "Gin Tonic",
    price: "$15",
    desc: "Gin, vermouth, orange peel.",
    img: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1765624183/Gin_Tonic_qne74u.webp",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu-page");
  };

  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2>A menu designed for long evenings</h2>
        <p>Drinks made to be enjoyed slowly.</p>

        <button className="view-menu-btn" onClick={handleViewMenu}>
          View Menu
        </button>
      </div>

      <div className="menu-grid">
        {drinks.map((drink) => (
          <div key={drink.id} className="menu-item">
            <div className="image-wrapper">
              <img src={drink.img} alt={drink.name} className="menu-image" />
            </div>

            <div className="item-info">
              <h3>
                {drink.name}...{drink.price}
              </h3>

              <p>{drink.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
