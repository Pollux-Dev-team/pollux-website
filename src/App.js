import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Home";
import Contactpage from "./Pages/Contact";
import Pricespage from "./Pages/Prices";
import Portfoliopage from "./Pages/Portfolio";


function App() {
  return (
    <div className="App">
      <Header />
      <Portfoliopage />
      <Footer />
    </div>
  );
}

export default App;
