import "./App.css";
import Contact from "./Components/Contact/Contact";
import Form from "./Components/Form/Form";
import ComponentPrices from "./Containers/ComponentPrices";
import FAQ from "./Containers/FAQ";
import Portfolio from "./Containers/Portfolio";
import Header from "./Components/Header/Header";
import TestemonialContainer from "./Containers/TestemonialContainer";
import Testemonial from "./Components/Testemonial/Testemonial";

function App() {
  return (
    <div className="App">
      {/* <FAQ />
      <ComponentPrices />
      <Contact />
      <Portfolio />
      <Form />
      <Header /> */}
      <TestemonialContainer />
    </div>
  );
}

export default App;
