import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
// The useHistory hook gives you access to the history instance that you may use to navigate. ...

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
