import "./App.css";
import Contact from "./Components/Contact/Contact";
import Form from "./Components/Form/Form";
import ComponentPrices from "./Containers/ComponentPrices";
import FAQ from "./Containers/FAQ";
import Portfolio from "./Containers/Portfolio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Packages from "./Components/Packages/Packages";
import TestemonialContainer from "./Containers/TestemonialContainer";
import Testemonial from "./Components/Testemonial/Testemonial";


function App() {
  return (
    <div className="App">


      <Header />
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;
