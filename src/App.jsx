import "./App.css";
import { useState } from "react";

function App() {
  let [greeting, setText] = useState("Greeting Message");
  const handleClick = (text) => {
    setText((greeting = text));
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => handleClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleClick("Hi!")}>Hi!</button>
        <button onClick={() => handleClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
