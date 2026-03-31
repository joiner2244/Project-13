import StudentCard from "./StudentCard";

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student ID Cards</h1>

      <div className="row">
        <div className="col-md-4">
          <StudentCard name="Ali" course="React" roll="101" />
        </div>

        <div className="col-md-4">
          <StudentCard name="Sara" course="jQuery" roll="102" />
        </div>

        <div className="col-md-4">
          <StudentCard name="Ahmed" course="PHP" roll="103" />
        </div>
      </div>
    </div>
  );
}