import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>teste</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "500px",
        }}
      >
        <h2 style={{ fontSize: "1.5rem" }}>List apps</h2>

        <Link to="/posts">
          <button style={{ color: "black" }}>Access posts</button>
        </Link>

        <Link to="/todolist">
          <button style={{ color: "black" }}>Access To-do List</button>
        </Link>

        <Link to="/namelist">
          <button style={{ color: "black" }}>Access Name List</button>
        </Link>
      </div>
    </div>
  );
}
