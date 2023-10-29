import { VideoQualityEnum } from '../enum/video.enum';

export const handleOnGetVideoQualityBySize = (width: number, height: number): VideoQualityEnum => {
  // Calculate the total number of pixels (resolution)
  const resolution = width * height;

  if (resolution <= 640 * 360) {
    return VideoQualityEnum.LOW;
  } else if (resolution <= 1280 * 720) {
    return VideoQualityEnum.MEDIUM;
  } else if (resolution <= 1920 * 1080) {
    return VideoQualityEnum.HIGH;
  } else if (resolution <= 1280 * 720) {
    return VideoQualityEnum.HD720P;
  } else if (resolution <= 1920 * 1080) {
    return VideoQualityEnum.HD1080P;
  } else if (resolution <= 2560 * 1440) {
    return VideoQualityEnum.QHD1440P;
  } else if (resolution <= 3840 * 2160) {
    return VideoQualityEnum.UHD4K;
  } else {
    return VideoQualityEnum.UHD8K;
  }
};
