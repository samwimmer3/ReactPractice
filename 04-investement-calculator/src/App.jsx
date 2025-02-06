import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

import { useState } from "react";

function App() {
  const [investInput, setInvestInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 12,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestInput((prevInvestInput) => {
      return {
        ...prevInvestInput,
        [inputIdentifier]: +newValue, // the "+" sign is used to convert the string to a number
      };
    });
  }

  let validInput =
    investInput.duration > 0 &&
    investInput.expectedReturn > 0 &&
    investInput.initialInvestment > 0 &&
    investInput.annualInvestment > 0;

  return (
    <>
      <Header />
      <UserInput userInput={investInput} onSelect={handleChange} />
      {validInput ? (
        <Results userInput={investInput} />
      ) : (
        <p className="center">Please enter valid data</p>
      )}
    </>
  );
}

export default App;
