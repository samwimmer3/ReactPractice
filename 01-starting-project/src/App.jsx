import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js"; //Need curly braces to import because it is a named export and not a "default" export. (Only one default per file)
import { EXAMPLES } from "./data.js";

import { useState } from "react"; // 1. hooks must only be called inside of component functions and  2. cannot be called in nested statements.(TOP LEVEL ONLY)

//Main Component
function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>  <CoreConcept key = {conceptItem.title} {...conceptItem}/>)}  {/* This is the short way to do it */}

            <CoreConcept {...CORE_CONCEPTS[0]} />{" "}
            {/* This only works because the names are the same in the objects (adds them as key-value pairs) */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />{" "}
            {/* This is the long way to do it or if names don't match */}
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {" "}
            {/* List of buttons */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
              Components
            </TabButton>{" "}
            {/* Use children prop... this is called component composition */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>{" "}
            {/* using the function this way allows customization of button output!!! */}
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App; //can also add this before the function declaration for APP.
