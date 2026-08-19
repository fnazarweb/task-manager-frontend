// import { useState } from "react";
// import ListComponent from "./ListComponent";
// import ListClassComponent from "./ListClassComponent";
// import EffectComponent from "./EffectComponent";
// import LayoutEffectComponent from "./LayoutEffectComponent";
// import StateComponent from "./StateComponent";
// import ReducerComponent from "./ReducerComponent";
import RefComponent from "./RefComponent";

import "./App.css";

function App() {
  // const [isShowTimer, setIsShowTimer] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* {isShowTimer ? <ListClassComponent /> : <ListComponent />} */}
        {/* <button onClick={() => setIsShowTimer((prev) => !prev)}>
          Show Timer
        </button> */}
        {/* <EffectComponent /> */}
        {/* <LayoutEffectComponent /> */}
        {/* <StateComponent /> */}
        {/* <ReducerComponent /> */}
        <RefComponent />
      </header>
    </div>
  );
}

export default App;
