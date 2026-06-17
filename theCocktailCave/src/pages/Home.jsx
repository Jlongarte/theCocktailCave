import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import Blog from "./Blog";
import Carrousel from "../components/Carrousel/Carrousel";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Home = () => (
  <>
    <Hero
      title="A bar in the heart of Dublin"
      subtitle="A quiet place for evening drinks and conversation."
      imageSrc="/hero-img.webp"
      imageAlt="Cocktail Dublin"
      showButtons={true}
    />
    <Menu />
    <About />
    <Blog />
    <Carrousel />
    <Banner />
  </>
);

export default Home;
