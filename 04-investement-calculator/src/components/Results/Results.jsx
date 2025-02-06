import "./Results.css";

import { calculateInvestmentResults } from "../../util/investment.js";
import { formatter } from "../../util/investment.js";

export default function Results({ userInput }) {
  let outputData = calculateInvestmentResults(userInput);
  let initialInvestment =
    outputData[0].valueEndOfYear -
    outputData[0].interest -
    outputData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Yearly Interest</th>
          <th>Total Interest</th>
          <th>Invested Capitol</th>
        </tr>
      </thead>
      <tbody>
        {outputData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>
              {formatter.format(
                data.valueEndOfYear -
                  data.annualInvestment * data.year -
                  initialInvestment
              )}
            </td>
            <td>{formatter.format(data.valueEndOfYear - data.interest)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
