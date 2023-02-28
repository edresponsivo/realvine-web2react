import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import PropertyList from "./PropertyList";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <main>
      <article className="article">
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* SERVICE */}
        <Service />

        {/* PROPERTY */}
        <PropertyList />

        {/* CONTACT */}
        <Contact />

        {/* NEWSLETTER */}
        <Newsletter />
      </article>
    </main>
  );
};
export default Main;
