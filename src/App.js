import { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "./App.css";

/*
  I am using one file to write all function and also state management because this is basically a small task. 
  In a situation where we are working on a huge project, most of the component you see will be splited to smaller 
  reusable component, and also the function decalared in this file will most likely be in another file. 
*/

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const isReadyToFinish = homeScore >= 21 || awayScore >= 21;
    const isLeadingByTwoPoints = Math.abs(homeScore - awayScore) >= 2;
    console.log(isReadyToFinish, isLeadingByTwoPoints);
    if (isReadyToFinish && isLeadingByTwoPoints) {
      setWinner("we have a winner!!!");
    }
  }, [homeScore, awayScore]);

  const formatScoreDisplay = (numb) => {
    if (numb < 10) return `0${numb}`;
    return numb;
  };

  const handleHomeScore = (type) => {
    if (type === "increase") {
      setHomeScore(homeScore + 1);
    } else if (homeScore > 0) {
      setHomeScore(homeScore - 1);
    }
  };
  const handleAwayScore = (type) => {
    if (type === "increase") {
      setAwayScore(awayScore + 1);
    } else if (awayScore > 0) {
      setAwayScore(awayScore - 1);
    }
  };

  return (
    <div className="App">
      <div className="scoreBoard">
        {winner && <h4 className="winMessage">{winner}</h4>}
        <div className="palyerOne scoreSection">
          <div className="scoreDisplaySection">
            <p className="playerName">N. Djokovic</p>
            <p className="score">{formatScoreDisplay(homeScore)}</p>
            <div className="homeScoreControler">
              <FaCaretUp
                onClick={() => {
                  handleHomeScore("increase");
                }}
              />
              <br />
              <FaCaretDown
                onClick={() => {
                  handleHomeScore("decrease");
                }}
              />
            </div>
          </div>
        </div>

        <div className="competition">VS</div>
        <div className="palyerTwo scoreSection">
          <div className="scoreDisplaySection">
            <p className="playerName">C. Alcaraz</p>
            <p className="score">{formatScoreDisplay(awayScore)}</p>
            <div className="awayScoreControler">
              <FaCaretUp
                onClick={() => {
                  handleAwayScore("increase");
                }}
              />
              <br />
              <FaCaretDown
                onClick={() => {
                  handleAwayScore("decrease");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
