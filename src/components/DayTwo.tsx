import { useState } from 'react';
import { getPossibleGames, getTotalColorCountsPerGame, processGameData } from '../utils/helper';
import DownloadButton from './shared/DownloadFile';
import UploadFileInput from './shared/UploadFile';
import { Configuration, GameProps } from './type';

const CONFIGURATION: Configuration = {
  1: { red: 12, green: 13, blue: 14 }
};

export const DayTwo = ({ onResult }: GameProps) => {
  const [possibleGames, setPossibleGames] = useState<string[] | undefined>();
  const [totalColorCountsPerGame, setTotalColorCountsPerGame] = useState<Record<string, Record<string, number>>>();

  const processFile = (lines: string[]) => {
    const data = processGameData(lines);
    const totalColorCountsPerGame = getTotalColorCountsPerGame(data);

    console.log({ data, totalColorCountsPerGame });
    setTotalColorCountsPerGame(totalColorCountsPerGame);
  };

  const handleConfiguration = (config: keyof Configuration) => {
    if (!totalColorCountsPerGame) return;

    const configuration = CONFIGURATION[config];
    const result = getPossibleGames(configuration, totalColorCountsPerGame);
    onResult(`Possible games: ${result.join(' ')}`);
    setPossibleGames(result);
  };

  const handleIdsSum = () => {
    const sumOfIds = possibleGames
      ?.map((game) => {
        const [prefix, numericalPart]: string[] = game.split(' ');
        return numericalPart ? parseInt(numericalPart) : 0;
      })
      .reduce((sum: number, numericalPart: number) => sum + numericalPart, 0);

    if (sumOfIds) {
      onResult(`The sum of the IDs: ${sumOfIds?.toString()}`);
    }
  };

  return (
    <div>
      <h3>--- Day 2: Cube Conundrum ---</h3>
      <div className="flex flex-col gap-3">
        <UploadFileInput onFileProcessed={processFile} />
        <DownloadButton src="/__helper__/gameTwo.txt" fileName="gameTwo-sample.txt" />
      </div>
      {totalColorCountsPerGame && (
        <div className="flex flex-col gap-3">
          <div className="bg-blue-300 p-2 flex flex-col gap-2">
            <h5>Configuration 1</h5>
            <p>Load with: 12 red cubes, 13 green cubes, and 14 blue cubes</p>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none"
              onClick={() => handleConfiguration(1)}
            >
              Load
            </button>
          </div>
          {possibleGames && (
            <div className="bg-orange-300 p-2 flex flex-col gap-2">
              <h5>Calculate the sum of the IDs of those games</h5>
              <button
                className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none"
                onClick={handleIdsSum}
              >
                Calculate
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
