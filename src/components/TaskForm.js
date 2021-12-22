import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContenxt";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const { addTask, updateTask, tasks } = useContext(GlobalContext);

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="p-5 bg-secondary mt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Titulo"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div className="form-group my-1">
          <textarea
            name="description"
            placeholder="Descripcion"
            rows="3"
            className="form-control"
            onChange={handleChange}
            value={task.description}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-dark form-control">
            {task.id ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
