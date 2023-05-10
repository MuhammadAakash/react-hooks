import "./App.css";
import EffectHook from "./components/useEffect/EffectHook";
import ReducerHook from "./components/useReducer/ReducerHook";
import StateHook from "./components/useState/StateHook";
import RefHook from "./components/useRef/RefHook";

function App() {
  return (
    <div className="App">
      <StateHook />

      <ReducerHook />

      <EffectHook />

      <RefHook />
    </div>
  );
}

export default App;
