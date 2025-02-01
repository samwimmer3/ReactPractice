import "./CoreConcept.css";

//Component using props... (this makes it more reusable and refers to the info listed in the instantiation below)
export default function CoreConcept(props) { //can also put ({image, title, description}) in the parameters and then use them directly in the return statement refer to part 46
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p> {props.description}</p>
    </li>
  );
}