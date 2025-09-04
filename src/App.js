
import './App.css';
import Header from './componets/header';
import Todo from './componets/todo';
import Footer from './componets/footer';
import AddToTodoList from './componets/addtodolist';
import {useState} from 'react';
function App() {
  // Use a local variable name (not "Todo" which is an imported binding)
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to the market", desc: "You need to go to the market to buy stuff" },
    { id: 2, title: "Go to the mall", desc: "You need to go to the mall to buy stuff" },
    { id: 3, title: "Go to the school", desc: "You need to go to the school to buy stuff" },
  ]);
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let id;
    if (todos.length === 0) {
      id = 1;
    }
    else {
      id = todos[todos.length - 1].id + 1;
    }
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  } 

  const onDelete = (todo) => {
    // placeholder delete handler
    setTodos(todos.filter((e) => e !== todo));
  };

  return (
    <>
      <Header title="My App" searchbar={false} />
      <AddToTodoList addTodo={addTodo}/>
      <Todo todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
