import React from "react";

export default function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <aside className="task-status">
      <h3>Task Status</h3>
      <div className="task-list">
        {tasks.length === 0 && <div className="muted">No tasks selected.</div>}
        {tasks.map((task) => (
          <div className="task-item card" key={task.id}>
            <div className="task-title">{task.title}</div>
            <button
              className="btn btn-success"
              onClick={() => onComplete(task)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      <h3 className="resolved-title">Resolved Tasks</h3>
      {resolved.length === 0 && <div className="muted">No resolved tasks yet.</div>}
      {resolved.map((task) => (
        <div className="task-item resolved card" key={task.id}>
          {task.title}
        </div>
      ))}
    </aside>
  );
}
