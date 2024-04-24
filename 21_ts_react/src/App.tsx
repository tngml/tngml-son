import React from "react";
import PropsTypes from "./components/PropsTypes";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import EventObj from "./components/EventObj";

function App() {
  return (
    <div className="App">
      <PropsTypes name="layla" age={20} />
      <UseState />
      <UseRef />
      <EventObj />
    </div>
  );
}

export default App;
