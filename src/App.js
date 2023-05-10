import "./App.css";
import EffectHook from "./components/useEffect/EffectHook";
import ReducerHook from "./components/useReducer/ReducerHook";
import StateHook from "./components/useState/StateHook";
import RefHook from "./components/useRef/RefHook";
import LayoutEffect from "./components/useLayoutEffect/LayoutEffect";
import ImperativeHandle from "./components/useImperativeHandle/ImperativeHandle";
import ContextHook from "./components/useContext/ContextHook";

function App() {
  return (
    <div className="App">
      <StateHook />

      <ReducerHook />

      <EffectHook />

      <RefHook />

      <LayoutEffect />

      <ImperativeHandle />

      <ContextHook />
    </div>
  );
}

export default App;
