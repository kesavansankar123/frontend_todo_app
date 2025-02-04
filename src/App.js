
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios.get("https://backend-todo-theta.vercel.app/todos").then((res) => setTodos(res.data));
//   }, []);

//   const addOrUpdateTodo = () => {
//     if (newTodo.trim() === "") {
//       setError("Please enter a task.");
//       return;
//     }
//     setError("");
//     if (editingId) {
//       axios.put(`https://backend-todo-theta.vercel.app/todos/${editingId}`, { text: newTodo }).then((res) => {
//         setTodos(todos.map((todo) => (todo._id === editingId ? res.data : todo)));
//         setEditingId(null);
//         setNewTodo("");
//       });
//     } else {
//       axios.post("https://backend-todo-theta.vercel.app/todos", { text: newTodo }).then((res) => {
//         setTodos([...todos, res.data]);
//         setNewTodo("");
//       });
//     }
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
//     setEditingId(id);
//     setNewTodo(text);
//   };

//   const cancelEditing = () => {
//     setEditingId(null);
//     setNewTodo("");
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
//           <button className="btn btn-primary" onClick={addOrUpdateTodo}>
//             {editingId ? "Update" : "Add"}
//           </button>
//           {editingId && (
//             <button className="btn btn-secondary" onClick={cancelEditing}>
//               Cancel
//             </button>
//           )}
//         </div>
//         {error && <div className="text-danger mb-3">{error}</div>}

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
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    axios.get("https://backend-todo-theta.vercel.app/todos").then((res) => setTodos(res.data));
  }, []);

  const addOrUpdateTodo = () => {
    if (newTodo.trim() === "") {
      setError("Please enter a task.");
      return;
    }
    setError("");
    if (editingId) {
      axios.put(`https://backend-todo-theta.vercel.app/todos/${editingId}`, { text: newTodo }).then((res) => {
        setTodos(todos.map((todo) => (todo._id === editingId ? res.data : todo)));
        setEditingId(null);
        setNewTodo("");
      });
    } else {
      axios.post("https://backend-todo-theta.vercel.app/todos", { text: newTodo }).then((res) => {
        setTodos([...todos, res.data]);
        setNewTodo("");
      });
    }
  };

  const toggleComplete = (id, completed) => {
    axios.put(`https://backend-todo-theta.vercel.app/todos/${id}`, { completed: !completed }).then((res) => {
      setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`https://backend-todo-theta.vercel.app/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
      setDeleteConfirmId(null);
    });
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setNewTodo(text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setNewTodo("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-50">
        <h1 className="text-center text-primary mb-4">To-Do List</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="btn btn-primary" onClick={addOrUpdateTodo}>
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button className="btn btn-secondary" onClick={cancelEditing}>
              Cancel
            </button>
          )}
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}

        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="list-group-item d-flex flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between align-items-center">
                <span
                  className={`flex-grow-1 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
                  onClick={() => toggleComplete(todo._id, todo.completed)}
                  style={{ cursor: "pointer" }}
                >
                  {todo.text}
                </span>
                <div>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(todo._id, todo.text)}>
                    ✏️
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => setDeleteConfirmId(todo._id)}>
                    🗑️
                  </button>
                </div>
              </div>
              {deleteConfirmId === todo._id && (
                <div className="mt-2 d-flex justify-content-end">
                  <span className="me-2">Are you sure?</span>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => deleteTodo(todo._id)}>
                    Yes
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setDeleteConfirmId(null)}>
                    No
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
