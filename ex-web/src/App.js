import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  PortalProvider,
  PortalGate,
  PortalDest,
} from "@josedache/react-portal";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <PortalProvider>
      <div>
        <h3 className="Title">React Portal</h3>
        <div className="Container">
          <button onClick={() => setCounter((p) => --p)}>-</button>
          <PortalGate name="one">
            <div className="Item">Item 1 {counter}</div>
          </PortalGate>
          <PortalGate name="two">
            <div className="Item">Item 2 {counter}</div>
          </PortalGate>
          <div className="Item">Item 3 {counter}</div>
          <button onClick={() => setCounter((p) => ++p)}>+</button>
        </div>
        <PortalDest gate="one" />
        <PortalDest gate="two" />
      </div>
    </PortalProvider>
  );
}

export default App;
