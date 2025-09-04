
import './App.css';
import Header from './componets/header';
import Todo from './componets/todo';
import Footer from './componets/footer';
import AddToTodoList from './componets/addtodolist';
import {useState, useEffect} from 'react';
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }   
  // Use a local variable name (not "Todo" which is an imported binding)
  const [todos, setTodos] = useState(initTodo);
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
    setTodos(todos.filter((e) => e !== todo));
    console.log("Deleted", todo);

  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
