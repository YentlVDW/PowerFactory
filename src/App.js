import Navigation from "./components/Navigation.js";
import Banner from "./components/Banner.js";
import About from "./components/About.js";
import OpeningHours from "./components/OpeningHours.js";
import Subscriptions from "./components/Subscriptions.js";
import Gallery from "./components/Gallery.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About />
      <OpeningHours />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
