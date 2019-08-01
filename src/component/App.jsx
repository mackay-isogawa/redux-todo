import React from "react";
import Footer from "./Footer";
import AddTodo from "../container/AddTodo";
import VisibleTodoList from "../container/VisibleTodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
