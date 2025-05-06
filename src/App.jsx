import { useState } from 'react';
import VotingPage from './components/VotingPage';
import ThankYou from './components/ThankYou';
import Results from './components/Results';

function App() {
  const [voted, setVoted] = useState(localStorage.getItem("hasVoted") === "true");
  const [viewResults, setViewResults] = useState(false);

  return (
    <>
      {viewResults ? (
        <Results />
      ) : voted ? (
        <ThankYou />
      ) : (
        <VotingPage setVoted={setVoted} />
      )}

      {!viewResults && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button onClick={() => setViewResults(true)}>View Results</button>
        </div>
      )}
    </>
  );
}

export default App;
