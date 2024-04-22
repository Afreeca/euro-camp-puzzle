export type FileInputProps = {
  onFileProcessed: (lines: string[]) => void;
};

export type DownloadButtonProps = {
  src: string;
  fileName: string;
};

export type Game = {
  id: number;
  name: string;
  component: React.ComponentType<any>;
};

export type GameProps = {
  onResult: (lines: string) => void;
};

export type GameSubset = string[];
export type GameData = Record<string, GameSubset[]>;

export type ColourCount = { red: number; green: number; blue: number };

export type Configuration = {
  [key: number]: ColourCount;
};

export type GameResult = Record<string, Record<string, number>>;
