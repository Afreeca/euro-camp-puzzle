import { ColourCount, GameData, GameResult, GameSubset } from '../components/type';

/**
 * extract the calibration values
 * @param line - line of text
 * @returns the combination of the first and last digits or return 0
 */
export const extractCalibrations = (line: string): number => {
  const digits = line.match(/\d/g);
  if (!digits) return 0;

  const firstDigit = parseInt(digits[0]);
  const lastDigit = parseInt(digits[digits.length - 1]);
  const calibrationValue = firstDigit * 10 + lastDigit;

  return calibrationValue;
};

/**
 * calculate total calibration
 * @param calibrations - a list of calibrations
 * @returns return the sum of calibrations
 */
export const sumCalibration = (calibrations: number[]) => {
  return calibrations.reduce((acc, item) => (acc += item), 0);
};

/**
 * transforms a list of game records into a organised record by game Id
 * @param gameRecords - game records list
 * @returns a structured record data by game Id and subsets,
 */
export const processGameData = (gameRecords: string[]): GameData => {
  const gamesData: GameData = {};
  for (const record of gameRecords) {
    const [gameId, subsetRecord] = record.split(': ');
    const subsets = subsetRecord.split(';').map((subset) => subset.trim().split(', '));
    gamesData[gameId] = subsets;
  }
  return gamesData;
};

/**
 * parse a game sets and return a total count for each colour
 * @param subsets - a list of sets record of a game
 * @returns return the total count by colour for a particular game ex: { red: x, blue: y, green: z }
 */
export const getTotalColorCounts = (subsets: GameSubset[]): Record<string, number> => {
  console.log('subsets: ', subsets);
  const colorCounts: Record<string, number> = {};

  subsets.forEach((subset) => {
    subset.forEach((elements) => {
      const [countStr, color] = elements.split(' ');
      const count = parseInt(countStr);
      colorCounts[color] = (colorCounts[color] || 0) + count;
    });
  });

  console.log('colorCounts: ', colorCounts);
  return colorCounts;
};

/**
 * parse a list of game sets and return a total count for each colour for all games
 * @param gamesData - a list of game records
 * @returns return an object with gameId as a key and the value is the total colour count
 */
export const getTotalColorCountsPerGame = (gamesData: GameData): Record<string, Record<string, number>> => {
  const totalColorCountsPerGame: Record<string, Record<string, number>> = {};

  Object.entries(gamesData).forEach(([gameId, subsets]) => {
    totalColorCountsPerGame[gameId] = getTotalColorCounts(subsets);
  });

  return totalColorCountsPerGame;
};

export const getPossibleGames = (configuration: ColourCount, ColorCountsPerGame: GameResult): string[] => {
  console.log({ configuration, ColorCountsPerGame });
  const possibleGames: string[] = [];

  for (const gameId in ColorCountsPerGame) {
    const counts = ColorCountsPerGame[gameId];
    let isPossible = true;

    for (const color in counts) {
      if (counts[color] > configuration[color as keyof ColourCount]) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      possibleGames.push(gameId);
    }
  }

  return possibleGames;
};