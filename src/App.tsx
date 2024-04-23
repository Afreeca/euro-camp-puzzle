import { useState } from 'react';
import { GAMES } from './utils/gamesMap';

function App() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);

  const handleDaySelect = (day: number) => {
    setSelectedGame(day);
    setGameResult(null);
  };

  const handleRestartGame = () => {
    setSelectedGame(null);
    setGameResult(null);
  };

  const renderGame = (gameId: number | null) => {
    if (!gameId) return null;

    const game = GAMES.find((g) => selectedGame === g.id);
    return game ? <game.component onResult={setGameResult} /> : null;
  };

  const restartVisibility = selectedGame ? 'visible' : 'invisible';

  return (
    <div className="container p-4 flex flex-col items-center gap-10">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-4">Select a day to play</h1>
        <div className="flex items-center gap-3">
          {GAMES.map((game) => (
            <button
              key={game.id}
              onClick={() => handleDaySelect(game.id)}
              className={`bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none ${
                selectedGame === game.id ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={selectedGame === game.id}
            >
              {game.name}
            </button>
          ))}
          <button
            className={`bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none ${restartVisibility}`}
            onClick={handleRestartGame}
          >
            Restart Game
          </button>
        </div>
      </div>
      {renderGame(selectedGame)}
      {gameResult && (
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">Final result</h2>
          <h5 className="text-green-600">{gameResult}</h5>
        </div>
      )}
    </div>
  );
}

export default App;
