import "./App.css";
import NavBar from "./components/navBar";
import Thanks from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Thanks />
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 *
 * 1 create Catalog component
 * 2 create the Product product
 * 3 on app.js render catalog
 * 4on catalog render 5 Product
 * 5 Product render QuantityPicker
 */

//css pallette #a6445d #021c41 #142f40 #d89b65 #bf835f
