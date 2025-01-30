
// import React, { useState } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodo = () => {
//     if (newTodo.trim() === "") return;
//     setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//     setNewTodo("");
//   };

//   // const toggleComplete = (id) => {
//   //   setTodos(
//   //     todos.map((todo) =>
//   //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//   //     )
//   //   );
//   // };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ margin: "10px 0" }}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//                 cursor: "pointer",
//               }}
//               // onClick={() => toggleComplete(todo.id)}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// // Backend - server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/todoDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const todoSchema = new mongoose.Schema({
//   text: String,
//   completed: Boolean,
// });
// const Todo = mongoose.model("Todo", todoSchema);

// // Routes
// app.get("/todos", async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

// app.post("/todos", async (req, res) => {
//   const newTodo = new Todo({ text: req.body.text, completed: false });
//   await newTodo.save();
//   res.json(newTodo);
// });

// app.put("/todos/:id", async (req, res) => {
//   const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedTodo);
// });

// app.delete("/todos/:id", async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: "Todo deleted" });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

// // Frontend - App.js (React)
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/todos").then((res) => setTodos(res.data));
//   }, []);

//   const addTodo = () => {
//     axios.post("http://localhost:5000/todos", { text: newTodo }).then((res) => {
//       setTodos([...todos, res.data]);
//       setNewTodo("");
//     });
//   };

//   const toggleComplete = (id, completed) => {
//     axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed }).then((res) => {
//       setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
//     });
//   };

//   const deleteTodo = (id) => {
//     axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
//       setTodos(todos.filter((todo) => todo._id !== id));
//     });
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>
//             <span
//               style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//               onClick={() => toggleComplete(todo._id, todo.completed)}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
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
    axios.delete(`https://backend-todo-theta.vercel.app/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-50">
        <h1 className="text-center text-primary mb-4">To-Do List</h1>

        {/* Input Field */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>

        {/* To-Do List */}
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
                onClick={() => toggleComplete(todo._id, todo.completed)}
                style={{ cursor: "pointer" }}
              >
                {todo.text}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

