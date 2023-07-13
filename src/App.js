import Header from "./components/Header/Header";
import CloverResearch from "./components/CloverResearch/CloverResearch";
import Prototypes from "./components/Prototypes/Prototypes";
import Development from "./components/Development/Development";
import Benefits from "./components/Benefits/Benefits";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <CloverResearch />
      <Prototypes />
      <Development />
      <Benefits />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
