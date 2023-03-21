import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header de teste</h1>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
