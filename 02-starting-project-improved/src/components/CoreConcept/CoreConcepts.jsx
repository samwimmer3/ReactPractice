import { CORE_CONCEPTS } from "../../data.js"; //Need curly braces to import because it is a named export and not a "default" export. (Only one default per file)
import CoreConcept from "./CoreConcept.jsx";
import Section from "../Section/Section.jsx";

export default function CoreConcepts() {
    return(
        <Section id="core-concepts" title  = "Core Concepts!">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>  <CoreConcept key = {conceptItem.title} {...conceptItem}/>)}  {/* This is the short way to do it */}
          </ul>
        </Section>
    );
}
