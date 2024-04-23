import {
  extractCalibrations,
  getPossibleGames,
  getTotalColorCounts,
  getTotalColorCountsPerGame,
  processGameData,
  sumCalibration
} from '../../utils/helper';

const cases: [string, number][] = [
  ['1abc2', 12],
  ['pqr3stu8vwx', 38],
  ['a1b2c3d4e5f', 15],
  ['treb7uchet', 77]
];

const dayTwoGameLines: string[] = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 3: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 2: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
];

describe('extractCalibrations', () => {
  it('return 0 when there are no digits to be extracted', () => {
    // arange
    const line: string = 'kjaua';
    const expected = 0;

    // act
    const result = extractCalibrations(line);

    // assert
    expect(result).toBe(expected);
  });

  it.each(cases)('given %s as a line return calibration value of %p', (line, expected) => {
    const result = extractCalibrations(line);
    expect(result).toBe(expected);
  });
});

describe('sumCalibration', () => {
  it('should return the right calibration sum', () => {
    const calibrations = [5, 7, 2, 12];
    const expected = 26;

    const result = sumCalibration(calibrations);

    expect(result).toBe(expected);
  });
});

describe('processGameData', () => {
  it('should return the right parsed data', () => {
    const expected = {
      'Game 1': [['3 blue', '4 red'], ['1 red', '2 green', '6 blue'], ['2 green']],
      'Game 3': [
        ['1 blue', '2 green'],
        ['3 green', '4 blue', '1 red'],
        ['1 green', '1 blue']
      ],
      'Game 2': [
        ['8 green', '6 blue', '20 red'],
        ['5 blue', '4 red', '13 green'],
        ['5 green', '1 red']
      ]
    };

    const result = processGameData(dayTwoGameLines);

    expect(result).toEqual(expected); // enough
    expect(Object.keys(result).length).toBe(3);
    expect(result).toHaveProperty('Game 1');
    expect(result).toHaveProperty('Game 2');
    expect(result['Game 1']).toContainEqual(['3 blue', '4 red']);
  });
});

describe('getTotalColorCountsPerGame', () => {
  it('should return a list of all games each with total count colour', () => {
    const data = {
      'Game 1': [['3 blue', '4 red'], ['1 red', '2 green', '6 blue'], ['2 green']],
      'Game 3': [
        ['1 blue', '2 green'],
        ['3 green', '4 blue', '1 red'],
        ['1 green', '1 blue']
      ],
      'Game 2': [
        ['8 green', '6 blue', '20 red'],
        ['5 blue', '4 red', '13 green'],
        ['5 green', '1 red']
      ]
    };

    const expected = {
      'Game 1': {
        blue: 9,
        red: 5,
        green: 4
      },
      'Game 2': {
        green: 26,
        blue: 11,
        red: 25
      },
      'Game 3': {
        blue: 6,
        green: 6,
        red: 1
      }
    };

    const result = getTotalColorCountsPerGame(data);

    expect(result).toEqual(expected);
  });
});

describe('getTotalColorCounts', () => {
  it('should return the total count colour per game', () => {
    const subset = [['3 blue', '4 red'], ['1 red', '2 green', '6 blue'], ['2 green']];

    const expected = {
      blue: 9,
      red: 5,
      green: 4
    };

    const result = getTotalColorCounts(subset);

    expect(result).toEqual(expected);
  });
});

describe('getPossibleGames', () => {
  it('should return a list of possible games', () => {
    const configuration = { red: 12, green: 13, blue: 14 };

    const totalColorCountsPerGame = {
      'Game 1': {
        blue: 9,
        red: 5,
        green: 4
      },
      'Game 2': {
        green: 26,
        blue: 11,
        red: 25
      },
      'Game 3': {
        blue: 6,
        green: 6,
        red: 1
      }
    };

    const expected = ['Game 1', 'Game 3'];
    const result = getPossibleGames(configuration, totalColorCountsPerGame);

    expect(result).toEqual(expected);
  });

  it('should return empty list if no game is possible', () => {
    const configuration = { red: 2, green: 13, blue: 14 };

    const totalColorCountsPerGame = {
      'Game 1': {
        blue: 9,
        red: 5,
        green: 4
      },
      'Game 2': {
        green: 26,
        blue: 11,
        red: 25
      }
    };

    const expected: [] = [];
    const result = getPossibleGames(configuration, totalColorCountsPerGame);

    expect(result).toEqual(expected);
  });
});
