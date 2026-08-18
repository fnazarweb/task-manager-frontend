// import CounterComponent from "./CounterComponent";
// import RenderComponent from "./RenderComponent";
import ListComponent from "./ListComponent";
import MyClassComponent from "./MyClassComponent";
import { useState } from "react";

import "./App.css";

function App() {
  const [isShowTimer, setIsShowTimer] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <RenderComponent /> */}
        {/* <CounterComponent /> */}
        {isShowTimer ? <MyClassComponent /> : <ListComponent />}
        <button onClick={() => setIsShowTimer((prev) => !prev)}>
          Show Timer
        </button>
      </header>
    </div>
  );
}

export default App;
