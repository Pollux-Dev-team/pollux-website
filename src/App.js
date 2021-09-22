import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Home";
import Contactpage from "./Pages/Contact";
import Pricespage from "./Pages/Prices";
import Portfoliopage from "./Pages/Portfolio";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/portfolio" component={Portfoliopage} />
        <Route exact path="/contact" component={Contactpage} />
        <Route exact patg="/prices" component={Pricespage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
