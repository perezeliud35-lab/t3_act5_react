# Lista de Tareas - React

Mini aplicación desarrollada con React + Vite como parte de la actividad t3_act5_react.
Permite agregar, completar y eliminar tareas, mostrando estadísticas en tiempo real.

## Tecnologías
- React
- Vite
- CSS

## Preguntas

a) ¿Que diferencia hay entre props y state en React?
Las props son datos que un componente padre le pasa a un componente hijo. El hijo puede usarlos, pero no puede cambiarlos. En cambio, el state son datos que pertenecen al mismo componente y que si pueden cambiar, por ejemplo cuando el usuario hace alguna accion. Cada vez que el state cambia, el componente se actualiza automaticamente.

b) ¿Por que es importante usar una key al renderizar una lista de elementos?
La key sirve para que React pueda identificar cada elemento de la lista de forma unica. Asi sabe que elemento cambio, cual se elimino o cual se agrego, y puede actualizar la pantalla de una manera mas rapida y sin errores.

c) Explica con tus propias palabras que hace la funcion useState y da un ejemplo de donde la usaste en tu mini aplicacion.
useState sirve para guardar y actualizar informacion dentro de un componente. Cuando ese valor cambia, React vuelve a mostrar el componente con la informacion actualizada. En mi mini aplicacion lo use para guardar las tareas y el texto que escribia en el input, asi al agregar, completar o eliminar una tarea, los cambios aparecian de inmediato en la pantalla.

**Enlace del repositorio:**
https://github.com/perezeliud35-lab/t3_act5_react

**Enlace del proyecto desplegado:**
https://perezeliud35-lab.github.io/t3_act5_react/
