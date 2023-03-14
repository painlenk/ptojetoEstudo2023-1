import "./styles/reset.css";
import "./styles/global.css";
import NameList from "./components/NameList";
import TodoList from "./components/TodoList";
const namesMock = [
  { firstName: "leonardo", age: 25 },
  { firstName: "gabi", age: 23 },
];

function App() {
  return (
    <div className="App">
      <h1>teste</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "500px",
        }}
      >
        <NameList names={namesMock} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
