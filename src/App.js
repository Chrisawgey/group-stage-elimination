import React, { useState } from 'react';
import Bracket from './components/Bracket';
import './App.css';

function App() {
  const [rounds, setRounds] = useState([
    {
      matches: [
        { team1: { name: 'Team A', score: 0, eliminated: false }, team2: { name: 'Team B', score: 0, eliminated: false } },
        { team1: { name: 'Team C', score: 0, eliminated: false }, team2: { name: 'Team D', score: 0, eliminated: false } },
        { team1: { name: 'Team E', score: 0, eliminated: false }, team2: { name: 'Team F', score: 0, eliminated: false } },
        { team1: { name: 'Team G', score: 0, eliminated: false }, team2: { name: 'Team H', score: 0, eliminated: false } },
      ],
    },
    {
      matches: [
        { team1: { name: '', score: 0, eliminated: false }, team2: { name: '', score: 0, eliminated: false } },
        { team1: { name: '', score: 0, eliminated: false }, team2: { name: '', score: 0, eliminated: false } },
      ],
    },
    {
      matches: [
        { team1: { name: '', score: 0, eliminated: false }, team2: { name: '', score: 0, eliminated: false } },
      ],
    },
  ]);

  const handleScoreUpdate = (roundIndex, matchIndex, team, newScore) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIndex].matches[matchIndex][team].score = parseInt(newScore);
    setRounds(updatedRounds);
  };

  const handleNameUpdate = (roundIndex, matchIndex, team, newName) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIndex].matches[matchIndex][team].name = newName;
    setRounds(updatedRounds);
  };

  const advanceTeam = (roundIndex, matchIndex) => {
    if (roundIndex >= rounds.length - 1) return;
    const updatedRounds = [...rounds];
    const match = updatedRounds[roundIndex].matches[matchIndex];

    const winner = match.team1.score > match.team2.score ? match.team1 : match.team2;
    const loser = match.team1.score > match.team2.score ? match.team2 : match.team1;
    loser.eliminated = true;

    const nextMatchIndex = Math.floor(matchIndex / 2);
    const nextTeamPosition = matchIndex % 2 === 0 ? 'team1' : 'team2';

    updatedRounds[roundIndex + 1].matches[nextMatchIndex][nextTeamPosition] = {
      ...winner,
      score: 0,
    };

    setRounds(updatedRounds);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">
          COMPUTER SCIENCE CTP <span className="flag" role="img" aria-label="flag">🚩</span>
        </h1>
      </header>
      <Bracket
        rounds={rounds}
        handleScoreUpdate={handleScoreUpdate}
        handleNameUpdate={handleNameUpdate}
        advanceTeam={advanceTeam}
      />
    </div>
  );
}

export default App;
