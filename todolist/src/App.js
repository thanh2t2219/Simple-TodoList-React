import "./App.css";
import AddTask from "./components/AddTask";
import Paper from "./components/Paper";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div className="App">
        <AddTask />

        <Paper />
      </div>
    </Provider>
  );
}

export default App;
