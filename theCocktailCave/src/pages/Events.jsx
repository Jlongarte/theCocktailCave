import { useNavigate } from "react-router-dom";
import "../components/Menu/Menu.css";

const eventsList = [
  {
    id: 1,
    name: "Jazz & Sips Night",
    date: "Every Thursday...9:00 PM",
    desc: "Live vinyl jazz session paired with our signature gin selection.",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mixology Masterclass",
    date: "June 18th...7:00 PM",
    desc: "Learn the secrets behind our classic balance, salinity, and ice carving.",
    img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Midnight Tasting",
    date: "June 27th...11:30 PM",
    desc: "An exclusive blind tasting of rare vermouths and aged whiskeys.",
    img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop",
  },
];

const EventsPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className="menu-section">
      <div className="menu-header">
        <h2>Evenings worth remembering</h2>
        <p>Exclusive experiences tailored for long nights.</p>
        <button className="view-menu-btn" onClick={handleGoBack}>
          Go Back Home
        </button>
      </div>

      <div className="menu-grid">
        {eventsList.map((event) => (
          <div key={event.id} className="menu-item">
            <div className="image-wrapper">
              <img src={event.img} alt={event.name} className="menu-image" />
            </div>
            <div className="item-info">
              <h3>
                {event.name}...{event.date}
              </h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
