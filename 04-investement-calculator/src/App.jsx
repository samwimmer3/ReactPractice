import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

import {calculateInvestmentResults} from "./util/investment"

import { useState } from "react";

function App() {

  const [investInput, setInvestInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestInput((prevInvestInput) => {
      return {
        ...prevInvestInput,
        [inputIdentifier]: newValue,
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput userInput = {investInput} onSelect={handleChange}/>
      <Results userInput = {investInput}/>
    </>
  );
}

export default App;
