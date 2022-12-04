import React, { useContext } from "react";
import Auth from "./components/Auth";
import Ingredients from "./components/Ingredients/Ingredients";
import { AuthContext } from "./context/auth-context";

const App = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth></Auth>;
  if (authContext.isAuth) {
    content = <Ingredients></Ingredients>;
  }
  return content;
};

export default App;
