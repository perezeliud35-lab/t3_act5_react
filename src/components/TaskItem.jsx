function TaskItem({ tarea, onToggle, onDelete }) {
return (
    <li className={tarea.completada ? "task completed" : "task"}>
<span onClick={() => onToggle(tarea.id)}>{tarea.texto}</span>
<button onClick={() => onDelete(tarea.id)}>Quitar</button>
    </li>
);
}

export default TaskItem;