import reactImg from "../../assets/react-core-concepts.png"; //load pictures like this to avoid getting lost (for deployment)
import "./header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

//Normal Function
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//Component uses dynamic description and good practice for picture implementation
export default function Header() {
    let description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }