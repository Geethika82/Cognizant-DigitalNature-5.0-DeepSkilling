import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Geethika"
        school="Vignan Institute of Engineering for Women"
        total={480}
        goal={6}
      />
    </div>
  );
}

export default App;