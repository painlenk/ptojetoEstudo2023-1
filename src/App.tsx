import "./styles/reset.css";
import "./styles/global.css";
import NameList from "./components/NameList";
const namesMock = [
  { firstName: "leonardo", age: 25 },
  { firstName: "gabi", age: 23 },
];

function App() {
  return (
    <div className="App">
      <h1>teste</h1>
      <NameList names={namesMock} />
    </div>
  );
}

export default App;
