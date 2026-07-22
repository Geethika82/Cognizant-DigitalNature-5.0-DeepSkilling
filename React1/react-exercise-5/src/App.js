import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>Cohort Details</h1>

      <CohortDetails
        cohortName="React Batch 1"
        startDate="20-Jul-2026"
        status="Ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        cohortName="Java Full Stack"
        startDate="15-Jun-2026"
        status="Completed"
        coach="Smith"
        trainer="Alex"
      />

      <CohortDetails
        cohortName="Python AI"
        startDate="01-Aug-2026"
        status="Ongoing"
        coach="Robert"
        trainer="James"
      />

    </div>
  );
}

export default App;