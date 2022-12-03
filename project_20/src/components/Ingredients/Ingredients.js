import React, { useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientsReducer = (curingredients, action) => {
  switch (action.type) {
    case "SED":
      return action.indgrents;
    case "ADD":
      return [...curingredients, action.indgrent];
    case "DELETE":
      return curingredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Somthing went wrong!");
  }
};

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SED":
      return { loading: true, error: null };
    case "RES":
      return { ...httpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.emsg };
    case "CLEAR":
      return { ...httpState, error: null };
    default:
      throw new Error("somthing went wrong!");
  }
};

function Ingredients() {
  const [userIngredents, dispatch] = useReducer(ingredientsReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, []);
  // const [isloading, setisloading] = useState(false);
  // const [error, seterror] = useState();

  // to stop infinetloop
  // useEffect(() => {
  //   fetch(
  //     "https://react-hooks-update-a0432-default-rtdb.firebaseio.com/ingredints.json"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       const loadedIngredients = [];
  //       for (const key in resData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: resData[key].title,
  //           amount: resData[key].amount,
  //         });
  //       }

  //       setingredients(loadedIngredients);
  //     });
  // }, []);
  // runs once first time pass empty array |^

  const addIngedinentsHandler = (ingredient) => {
    dispatchHttp({ type: "SED" });
    fetch(
      "https://react-hooks-update-a0432-default-rtdb.firebaseio.com/ingredints.json",
      {
        method: "POST",
        body: JSON.stringify({ ...ingredient }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        dispatchHttp({ type: "RES" });
        return res.json();
      })
      .then((resData) => {
        // setingredients((preIngrdents) => [
        //   ...preIngrdents,
        //   { id: resData.name, ...ingredient },
        // ]);
        dispatch({
          type: "ADD",
          indgrent: { id: resData.name, ...ingredient },
        });
      })
      .catch((e) => {
        dispatchHttp({ type: "ERROR", emsg: "somthing went wrong!" });
      });
  };
  const removeIngedinentsHandler = (id) => {
    dispatchHttp({ type: "SED" });

    fetch(
      `https://react-hooks-update-a0432-default-rtdb.firebaseio.com/ingredints/${id}.json`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          // if sucess do something
          dispatchHttp({ type: "RES" });
          // setingredients((preIngrdents) =>
          //   preIngrdents.filter((indgrent) => indgrent.id !== id)
          // );
          dispatch({ type: "DELETE", id: id });
        } else {
          // if fail throw error
          // seterror("Somthing went wrong!");
          dispatchHttp({ type: "ERROR", emsg: "somthing went wrong!" });
        }
      })
      .catch((e) => {
        dispatchHttp({ type: "ERROR", emsg: "somthing went wrong!" });
        console.log(id);
      });
  };

  //
  const filteredIngedintHandler = useCallback((filteredIngedints) => {
    // setingredients(filteredIngedints);
    dispatch({ type: "SED", indgrents: filteredIngedints });
  }, []);

  const clearError = () => {
    dispatchHttp({ type: "CLEAR" });
    // setisloading(false);
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredint={addIngedinentsHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onloadedIngredients={filteredIngedintHandler} />
        <IngredientList
          ingredients={userIngredents}
          onRemoveItem={removeIngedinentsHandler}
        ></IngredientList>
      </section>
    </div>
  );
}

export default Ingredients;
