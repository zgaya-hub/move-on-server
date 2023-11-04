// cloudinary.provider.ts

import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: 'dqcevzkt9',
      api_key: '946692781399783',
      api_secret: 'eAlaID_DqPwyjl1JiapUBkSdRxc',
    });
  },
};
