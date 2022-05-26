import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./pages/products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetales";
function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
          {/* this above should be first so it /products  will not be displayed  */}
          <Route path="/products" exact>
            <Products></Products>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

/* diplayed only 'mainpagename/wecome' is as url */
/*  diplayed only 'mainpagename/products' is as url */
