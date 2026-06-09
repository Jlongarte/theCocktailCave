import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Menu/Menu.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api-cocktails")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cocktails:", error);
        setLoading(false);
      });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2>Our Full Cocktail Selection</h2>
        <p>Explore our complete variety of hand-crafted drinks.</p>

        <button className="view-menu-btn" onClick={handleGoBack}>
          Go Back Home
        </button>
      </div>

      {loading ? (
        <p style={{ opacity: 0.6, fontSize: "1.2rem", fontFamily: "serif" }}>
          Discovering flavors...
        </p>
      ) : (
        <div className="menu-grid">
          {drinks.map((drink) => {
            let imageUrl = drink.image;

            if (imageUrl) {
              imageUrl = imageUrl.replace("CocktailsApi/", "");
              imageUrl = imageUrl.replace("/v1/", "/v1765624184/");
              imageUrl = imageUrl.replace(/\.(jpg|jpeg|png)$/i, "");

              if (!imageUrl.endsWith(".webp")) {
                imageUrl = `${imageUrl}.webp`;
              }
            }

            return (
              <div key={drink._id} className="menu-item">
                <div className="image-wrapper">
                  <img
                    src={
                      imageUrl ||
                      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop"
                    }
                    alt={drink.name}
                    className="menu-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>

                <div className="item-info">
                  <h3>{drink.name}</h3>
                  <p>{drink.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MenuPage;
