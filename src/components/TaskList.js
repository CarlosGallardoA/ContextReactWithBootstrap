import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);
  return (
    <div className="d-flex justify-content-center">
      {tasks.map((task) => (
        <div className="card m-2" key={task.id}>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <Link to={`/edit/${task.id}`}>
              <button className="btn btn-primary mx-1">Editar</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
