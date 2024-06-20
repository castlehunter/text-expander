import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TextExpander
        textLength={120}
        buttonColor="blue"
        showText="Show More"
        hideText="Show Less"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander textLength={50} buttonColor="brown" showText="Show Text">
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander textLength={100}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  textLength,
  buttonColor,
  showText = "Show More",
  hideText = "Show Less",
}) {
  const [expand, setExpand] = useState(false);

  const text = typeof children === "string" ? children : String(children);

  function handleClick() {
    setExpand(() => !expand);
  }

  return (
    <div>
      {!expand ? (
        <span>{text.substring(0, textLength)}... </span>
      ) : (
        <span>{text}</span>
      )}
      <span
        style={{ color: buttonColor, cursor: "pointer" }}
        onClick={handleClick}
      >
        {!expand ? showText : hideText}
      </span>
    </div>
  );
}

export default App;
