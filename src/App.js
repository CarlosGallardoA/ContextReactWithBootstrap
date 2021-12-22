import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { GlobalProvider } from "./context/GlobalContenxt";
function App() {
  return (
    <div>
      <GlobalProvider>
        <Heading />
        <div className="container">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
