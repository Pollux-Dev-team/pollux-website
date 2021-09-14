import "./App.css";
import Contact from "./Components/Contact/Contact";
import ComponentPrices from "./Containers/ComponentPrices";
import FAQ from "./Containers/FAQ";

function App() {
  return (
    <div className="App">
      <FAQ />
      <ComponentPrices />
      <Contact />
    </div>
  );
}

export default App;
