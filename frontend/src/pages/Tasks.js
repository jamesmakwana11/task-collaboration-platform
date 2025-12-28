import { useEffect, useState } from "react";
import api from "../api/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/tasks/${id}/status`, { status });
    setTasks((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, status } : t
      )
    );
  };

  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <div key={task._id}>
          <b>{task.title}</b> - {task.status}

          {task.status === "Todo" && (
            <button onClick={() => updateStatus(task._id, "In Progress")}>
              Start
            </button>
          )}

          {task.status === "In Progress" && (
            <button onClick={() => updateStatus(task._id, "Done")}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
