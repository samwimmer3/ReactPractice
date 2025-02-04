import reactImg from "../../assets/investment-calculator-logo.png"; //load pictures like this to avoid getting lost (for deployment)
import "./header.css";

export default function Header() {
  return (
    <header id="header"> 
      <img src={reactImg} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
