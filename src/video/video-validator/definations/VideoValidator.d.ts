type VideoValidatorOptionType = {
  movieSizeThreshold: number;
  shortSizeThreshold: number;
  mime: VideoMineType[];
};

type VideoMineType = 'video/mp4' | 'video/webm' | 'video/avi' | 'video/mpeg';
