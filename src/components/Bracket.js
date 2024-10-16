import React from 'react';
import './Bracket.css';

const Bracket = ({ rounds, handleScoreUpdate, handleNameUpdate, advanceTeam }) => {
  return (
    <div className="bracket-container">
      {rounds.map((round, roundIndex) => (
        <div className="round" key={roundIndex}>
          <h2>{roundIndex === rounds.length - 1 ? 'Final Round' : `Round ${roundIndex + 1}`}</h2>
          {round.matches.map((match, matchIndex) => (
            <div className="match" key={matchIndex}>
              <div className={`team ${match.team1.eliminated ? 'eliminated' : ''} ${match.team1.score > match.team2.score ? 'winner' : ''}`}>
                <input
                  type="text"
                  value={match.team1.name}
                  onChange={(e) => handleNameUpdate(roundIndex, matchIndex, 'team1', e.target.value)}
                />
                <input
                  className="score-input"
                  type="number"
                  value={match.team1.score}
                  onChange={(e) => handleScoreUpdate(roundIndex, matchIndex, 'team1', e.target.value)}
                />
              </div>
              <div className={`team ${match.team2.eliminated ? 'eliminated' : ''} ${match.team2.score > match.team1.score ? 'winner' : ''}`}>
                <input
                  type="text"
                  value={match.team2.name}
                  onChange={(e) => handleNameUpdate(roundIndex, matchIndex, 'team2', e.target.value)}
                />
                <input
                  className="score-input"
                  type="number"
                  value={match.team2.score}
                  onChange={(e) => handleScoreUpdate(roundIndex, matchIndex, 'team2', e.target.value)}
                />
              </div>
              <button className="advance-btn" onClick={() => advanceTeam(roundIndex, matchIndex)}>
                Advance Winner
              </button>
              {roundIndex < rounds.length - 1 && <div className="line"></div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bracket;
