import "./App.css";
import EffectHook from "./components/useEffect/EffectHook";
import ReducerHook from "./components/useReducer/ReducerHook";
import StateHook from "./components/useState/StateHook";
import RefHook from "./components/useRef/RefHook";
import LayoutEffect from "./components/useLayoutEffect/LayoutEffect";
import ImperativeHandle from "./components/useImperativeHandle/ImperativeHandle";

function App() {
  return (
    <div className="App">
      <StateHook />

      <ReducerHook />

      <EffectHook />

      <RefHook />

      <LayoutEffect />

      <ImperativeHandle />
    </div>
  );
}

export default App;
