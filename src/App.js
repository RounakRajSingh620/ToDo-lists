
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';



function App() {
  const onDelete = (todo) => {
    console.log("Todo Deleted", "todo")
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to ghat",
      desc: "You need to go to the market to get this job done3"
    }
  ]);
  return (
    <>
      <Header title="My Todos list" searchBar={false} />
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />

    </>
  );
}

export default App;
