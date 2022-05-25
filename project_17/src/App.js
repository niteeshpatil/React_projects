import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/products";
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
    </div>
  );
}

export default App;

/* diplayed only 'mainpagename/wecome' is as url */
/*  diplayed only 'mainpagename/products' is as url */
