import "./App.css";
import ReducerHook from "./components/useReducer/ReducerHook";
import StateHook from "./components/useState/StateHook";

function App() {
  return (
    <div className="App">
      <StateHook />

      <ReducerHook />
    </div>
  );
}

export default App;
