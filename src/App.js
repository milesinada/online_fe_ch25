import "./App.css";
import NavBar from "./components/navBar";
import Thanks from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import ToDo from "./components/todo";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


//css pallette #a6445d #021c41 #142f40 #d89b65 #bf835f

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <About/>
      <h1>Welcome to my Super Online Store</h1>

      <Catalog/>

      <ToDo/>
      
      <Thanks />
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
