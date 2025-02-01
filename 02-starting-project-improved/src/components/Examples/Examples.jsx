import TabButton from "../TabButton/TabButton.jsx";
import { EXAMPLES } from "../../data.js"; //Need curly braces to import because it is a named export and not a "default" export. (Only one default per file)
import { useState } from "react"; // 1. hooks must only be called inside of component functions and  2. cannot be called in nested statements.(TOP LEVEL ONLY)
import "./Examples.css";
import Section from "../Section/Section.jsx";
import Tabs from "../TabButton/Tabs.jsx";

export default function Examples() {
  //const stateArray = useState('Please click a button'); //this hook forces app to recalculate if something changes.
  const [selectedTopic, setSelectedTopic] = useState(); //array destructuring... first val= the state. second val = function to change.

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}>
              Components
            </TabButton>{" "}
            {/* Use children prop... this is called component composition */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>{" "}
            {/* using the function this way allows customization of button output!!! */}
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}
