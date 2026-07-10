import { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: false },
    { id: 2, texto: "Practicar useState", completada: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = tareas.length - completadas;

  return (
    <div className="app">
      <Header />

      <form onSubmit={agregarTarea} className="task-form">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      <Stats total={tareas.length} completadas={completadas} pendientes={pendientes} />

      <TaskList tareas={tareas} onToggle={toggleTarea} onDelete={eliminarTarea} />
    </div>
  );
}

export default App;