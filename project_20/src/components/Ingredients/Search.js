import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import LoadingIndicator from "../UI/LoadingIndicator";
const Search = React.memo((props) => {
  const [enterdFilter, setenterdFilter] = useState("");
  const [isloading, setisloading] = useState(false);
  const { onloadedIngredients } = props;
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterdFilter === inputRef.current.value) {
        setisloading(true);
        fetch(
          "https://react-hooks-update-a0432-default-rtdb.firebaseio.com/ingredints.json"
        )
          .then((res) => {
            return res.json();
          })
          .then((resData) => {
            setisloading(false);
            const loadedIngredients = [];
            for (const key in resData) {
              if (resData[key].title === enterdFilter || enterdFilter === "") {
                loadedIngredients.push({
                  id: key,
                  title: resData[key].title,
                  amount: resData[key].amount,
                });
              }
            }

            onloadedIngredients(loadedIngredients);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enterdFilter, onloadedIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enterdFilter}
            onChange={(e) => setenterdFilter(e.target.value)}
          />
          {isloading && <LoadingIndicator></LoadingIndicator>}
        </div>
      </Card>
    </section>
  );
});

export default Search;
