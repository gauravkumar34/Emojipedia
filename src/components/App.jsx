import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <p>&copy; 2020 Gaurav Kumar</p>
    </div>
  );
}

export default App;

//1. Create Entry Components
//2. Create props to replace hardcoded data.
// 3a import the emojipedia const
// 3b map through the emoojipedia array and render entry components
