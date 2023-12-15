import { MediaImageTypeEnum } from '@/media-image/enum/media-image.enum';
import { Season } from './entities/season.entity';

export const SERIES_MOCK: Partial<Season> = {
  ID: '0d1b1c48-d535-49f2-971a-44e446c23d08',
  seasonNo: 2,
  mediaImage: [
    {
      ID: 'e780d09e-32a7-4a4e-9f88-ca97d7b2b975',
      mediaImageType: MediaImageTypeEnum.THUMBNAIL,
      mediaImageUrl:
        'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=',
    },
  ],
  mediaBasicInfo: {
    ID: 'f66b5ea7-24b1-4513-8ce9-3934df971a42',
    mediaTitle: 'Netflix king money heist',
    mediaPlotSummary: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    mediaReleaseDate: 1702187088259,
  },
};
