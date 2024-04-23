import { useState } from 'react';
import { extractCalibrations, extractCalibrationsWithLetters, sumCalibration } from '../utils/helper';
import DownloadButton from './shared/DownloadFile';
import UploadFileInput from './shared/UploadFile';
import { GameProps } from './type';

export const DayOne = ({ onResult }: GameProps) => {
  const [calibrations, setCalibrations] = useState<number[] | undefined>();
  const [lines, setLines] = useState<string[]>();

  const processFile = (lines: string[]) => {
    setLines(lines);
  };

  const handleCalibration = () => {
    if (!lines) {
      return;
    }
    const calibrations = lines.map((line) => extractCalibrations(line)).filter((line) => line > 0);
    setCalibrations(calibrations);
    onResult(`calibration values are : ${calibrations.join(' ')}`);
  };

  const handleCalibrationWithLetters = () => {
    if (!lines) {
      return;
    }
    const calibrations = lines.map((line) => extractCalibrationsWithLetters(line)).filter((line) => line > 0);
    setCalibrations(calibrations);
    onResult(`calibration values are : ${calibrations.join(' ')}`);
  };

  const handleCalibrationSum = () => {
    if (!calibrations) {
      return;
    }
    const totalCalibration = sumCalibration(calibrations);
    onResult(`Total calibration is => ${totalCalibration.toString()}`);
  };

  return (
    <div>
      <h3>--- Day 1: Trebuchet?! ---</h3>
      <div className="flex flex-col gap-3">
        <UploadFileInput onFileProcessed={processFile} />
        <DownloadButton src="/__helper__/gameOne.txt" fileName="gameOne-sample.txt" />

        {lines && (
          <div className="bg-blue-300 p-2 flex flex-col gap-2">
            <h5>Calculate Calibration without letter</h5>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none"
              onClick={handleCalibration}
            >
              Calculate
            </button>
            <div className="bg-orange-300 p-2 flex flex-col gap-2">
              <h5>Calculate Calibration with letters</h5>
              <button
                className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none"
                onClick={handleCalibrationWithLetters}
              >
                Calculate
              </button>
            </div>
          </div>
        )}
        {calibrations && (
          <div className="bg-orange-300 p-2 flex flex-col gap-2">
            <h5>Calculate Calibration sum</h5>
            <button
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none"
              onClick={handleCalibrationSum}
            >
              Calculate Sum
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
