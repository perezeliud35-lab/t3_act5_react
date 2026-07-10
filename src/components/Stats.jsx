function Stats({ total, completadas, pendientes }) {
return (
    <div className="stats">
<span>Total: {total}</span>
<span>Completadas: {completadas}</span>
<span>Pendientes: {pendientes}</span>
    </div>
);
}

export default Stats;