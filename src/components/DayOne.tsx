import DownloadButton from './shared/DownloadFile';
import UploadFileInput from './shared/UploadFile';
import { GameProps } from './type';
import { extractCalibrations, sumCalibration } from './utils/helper';

export const DayOne = ({ onResult }: GameProps) => {
  const processFile = (lines: string[]) => {
    const calibrations = lines.map((line) => extractCalibrations(line));
    const totalCalibration = sumCalibration(calibrations);
    onResult(`Total calibration is => ${totalCalibration.toString()}`);
  };

  return (
    <div>
      <h3>--- Day 1: Trebuchet?! ---</h3>
      <div className="flex flex-col gap-3">
        <UploadFileInput onFileProcessed={processFile} />
        <DownloadButton src="/__helper__/gameOne.txt" fileName="gameOne-sample.txt" />
      </div>
    </div>
  );
};
