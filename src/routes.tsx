import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import NameList from "./components/NameList";
import Posts from "./components/Posts";
import TodoList from "./components/TodoList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/namelist" Component={NameList} />
        <Route path="/todolist" Component={TodoList} />
        <Route path="/posts" Component={Posts} />
      </Routes>
    </BrowserRouter>
  );
};
