export default function StudentCard(props) {
  return (
    <div className="card shadow p-3 mb-4">
      <div className="card-body text-center">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">Course: {props.course}</p>
        <p className="card-text">Roll No: {props.roll}</p>
      </div>
    </div>
  );
}