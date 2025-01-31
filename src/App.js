

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     axios.get("https://backend-todo-theta.vercel.app/todos").then((res) => setTodos(res.data));
//   }, []);

//   const addTodo = () => {
//     if (newTodo.trim() === "") return;
//     axios.post("https://backend-todo-theta.vercel.app/todos", { text: newTodo }).then((res) => {
//       setTodos([...todos, res.data]);
//       setNewTodo("");
//     });
//   };

//   const toggleComplete = (id, completed) => {
//     axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { completed: !completed }).then((res) => {
//       setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
//     });
//   };

//   const deleteTodo = (id) => {
//     axios.delete(`https://backend-todo-theta.vercel.app/todos/${id}`).then(() => {
//       setTodos(todos.filter((todo) => todo._id !== id));
//     });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow p-4 w-50">
//         <h1 className="text-center text-primary mb-4">To-Do List</h1>

//         {/* Input Field */}
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Add a new task..."
//           />
//           <button className="btn btn-primary" onClick={addTodo}>
//             Add
//           </button>
//         </div>

//         {/* To-Do List */}
//         <ul className="list-group">
//           {todos.map((todo) => (
//             <li
//               key={todo._id}
//               className="list-group-item d-flex justify-content-between align-items-center"
//             >
//               <span
//                 className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
//                 onClick={() => toggleComplete(todo._id, todo.completed)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {todo.text}
//               </span>
//               <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>
//                 ✖
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [editingText, setEditingText] = useState("");

//   useEffect(() => {
//     axios.get("https://backend-todo-theta.vercel.app/todos").then((res) => setTodos(res.data));
//   }, []);

//   const addTodo = () => {
//     if (newTodo.trim() === "") return;
//     axios.post("https://backend-todo-theta.vercel.app/todos", { text: newTodo }).then((res) => {
//       setTodos([...todos, res.data]);
//       setNewTodo("");
//     });
//   };

//   const toggleComplete = (id, completed) => {
//     axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { completed: !completed }).then((res) => {
//       setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
//     });
//   };

//   const deleteTodo = (id) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       axios.delete(`https://backend-todo-theta.vercel.app/todos/${id}`).then(() => {
//         setTodos(todos.filter((todo) => todo._id !== id));
//       });
//     }
//   };

//   const startEditing = (id, text) => {
//     const newText = prompt("Edit your task:", text);
//     if (newText !== null) {
//       if (window.confirm("Do you want to save the changes?")) {
//         saveEdit(id, newText);
//       }
//     }
//   };

//   const saveEdit = (id, newText) => {
//     if (newText.trim() === "") return;
//     axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { text: newText }).then((res) => {
//       setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
//     });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow p-4 w-50">
//         <h1 className="text-center text-primary mb-4">To-Do List</h1>

//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Add a new task..."
//           />
//           <button className="btn btn-primary" onClick={addTodo}>
//             Add
//           </button>
//         </div>

//         <ul className="list-group">
//           {todos.map((todo) => (
//             <li
//               key={todo._id}
//               className="list-group-item d-flex justify-content-between align-items-center"
//             >
//               <span
//                 className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
//                 onClick={() => toggleComplete(todo._id, todo.completed)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {todo.text}
//               </span>
//               <div>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(todo._id, todo.text)}>
//                   ✏️
//                 </button>
//                 <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>
//                   🗑️
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios.get("https://backend-todo-theta.vercel.app/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    axios.post("https://backend-todo-theta.vercel.app/todos", { text: newTodo }).then((res) => {
      setTodos([...todos, res.data]);
      setNewTodo("");
    });
  };

  const toggleComplete = (id, completed) => {
    axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { completed: !completed }).then((res) => {
      setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
    });
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      axios.delete(`https://backend-todo-theta.vercel.app/todos/${id}`).then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      });
    }
  };

  const startEditing = (id, text) => {
    const newText = prompt("Edit your task:", text);
    if (newText !== null && window.confirm("Do you want to save the changes?")) {
      saveEdit(id, newText);
    }
  };

  const saveEdit = (id, newText) => {
    if (newText.trim() === "") return;
    axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { text: newText }).then((res) => {
      setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h1 className="text-center text-primary mb-4">To-Do List</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="btn btn-primary" onClick={addTodo} onTouchStart={addTodo}>
            Add
          </button>
        </div>

        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
                onClick={() => toggleComplete(todo._id, todo.completed)}
                onTouchStart={() => toggleComplete(todo._id, todo.completed)}
                style={{ cursor: "pointer" }}
              >
                {todo.text}
              </span>
              <div>
                <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(todo._id, todo.text)} onTouchStart={() => startEditing(todo._id, todo.text)}>
                  ✏️
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)} onTouchStart={() => deleteTodo(todo._id)}>
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

