import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class MockService {
  private imageUrls: string[] = [
    // 'https://scontent.flhe2-3.fna.fbcdn.net/v/t39.30808-6/409192120_344675708193407_7918802026556175711_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=y8mTiFGI8BAAX-RM-uB&_nc_ht=scontent.flhe2-3.fna&oh=00_AfBElYX7ZdO7OqoVcRewpX9hjXgAP5J2JyclsfaaopAldg&oe=65816B13',
    // 'https://scontent.flhe2-3.fna.fbcdn.net/v/t39.30808-6/409761966_344675718193406_5249928365280385797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nXNKU_HQb9kAX-H2V_T&_nc_ht=scontent.flhe2-3.fna&oh=00_AfB4_fnckHO3fmSwqcTAKajEZoQVoc-HEbB4kFzpcH9P7A&oe=6580E344',
    // 'https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/409804011_344246724902972_8974120864056291729_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=sWRYkZm9j_wAX88Ntkx&_nc_ht=scontent.flhe2-4.fna&oh=00_AfB-zDzkI2RP0ASlqZFvS2SnmaCxKqkB5r0GhXG6iB-g8w&oe=658167E1',
    // 'https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/409699352_343915388269439_7707197602057188679_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wpG1rGmSICkAX-b8OQm&_nc_ht=scontent.flhe2-4.fna&oh=00_AfBWz5ZNz7Nh5pAXhBwWSN1Zc9JISBxbWUkdguk3v79whg&oe=6580BA67',
    // 'https://scontent.flhe2-4.fna.fbcdn.net/v/t39.30808-6/410732708_343523071642004_8180856693833358132_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=zVXnbL8ob7wAX8pQUZ4&_nc_ht=scontent.flhe2-4.fna&oh=00_AfCFoTUBxbhv8eBO7N-yKekr_WJFANojzOAcWfU5DvYLVw&oe=65825D9E',
    // 'https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/409780695_344806821513629_6627447652822859983_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vyJpJl9uk_cAX_sK0-y&_nc_ht=scontent.flhe2-2.fna&oh=00_AfDevoepoED-auM6iqtjJRve0ZzLyr_Esgpdr6DD8YVb0w&oe=65823ACC',
    // 'https://i.ytimg.com/vi/Odec9j4UktE/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/W-iUfadyIKQ/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/d0xikQRCIro/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJX4OwESw-VD5Ru8VLZWzaLcEreA',
    // 'https://i.ytimg.com/vi/5aSSNuyYunw/sddefault.jpg',
    // 'https://i.ytimg.com/vi/Fv5F22YW1iU/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/kIZzD9QKtsw/hqdefault.jpg',
    // 'https://i.ytimg.com/vi/LkYcOiSeYKg/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/gxSLUMby7EI/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/Hdb2lBxVgQs/maxresdefault.jpg',
    // 'https://i.ytimg.com/vi/H-yDGzRXM0s/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFUgXihlMA8=&rs=AOn4CLBLy4q63D37NoOQG_TcvfZroY6E_w',
    'https://e0.pxfuel.com/wallpapers/804/678/desktop-wallpaper-el-professor-money-heist.jpg',
    'https://wallpapercave.com/wp/wp5854947.jpg',
    'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/MONEYHEIST.jpg',
    'https://c4.wallpaperflare.com/wallpaper/117/646/399/wolf-game-background-weapon-wallpaper-thumb.jpg',
    'https://wallpaperbuzz.net/wp-content/uploads/2023/04/7806444.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7P3LUmmjieVyhxHCf3bZE5SAJ5hy20qlBZw&usqp=CAU',
    'https://i0.wp.com/glassesradar.com/wp-content/uploads/2018/02/MV5BNTRkZDRhZWQtMzViYS00MWRiLTliNTYtMTFkMjEwOTczMTlhXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg',

    // Add more image URLs as needed
  ];

  generateMockData<T>(entity: T, count: number): T[] {
    const mockData: T[] = [];

    for (let i = 0; i < count; i++) {
      const mockRecord: T = this.generateMockRecord(entity);
      mockData.push(mockRecord);
    }

    return mockData;
  }

  private generateMockRecord<T>(entity: T): T {
    const mockRecord: T = {} as T;

    Object.keys(entity).forEach((key) => {
      mockRecord[key] = this.generateMockValue(key, entity[key]);
    });

    return mockRecord;
  }

  private generateMockValue(key: string, value: any): any {
    if (Array.isArray(value)) {
      // If it's an array, generate mock data for each element
      return value.map((element) => this.generateMockValue(key, element));
    } else if (typeof value === 'object' && value !== null) {
      // If it's an object, generate mock data for each property
      return this.generateMockRecord(value);
    } else if (key === 'ID') {
      return uuid.v4();
    } else if (key === 'mediaImageUrl') {
      return this.getRandomImageUrl();
    } else {
      // For other data types, generate random values
      return this.getRandomValue(value);
    }
  }

  private getRandomValue(type: string): any {
    // Add more cases as needed for different data types
    switch (typeof type) {
      case 'string':
        return this.getRandomName();
      case 'number':
        return this.getRandomNumber();
      case 'boolean':
        return this.getRandomBoolean();
      // Add more cases for other data types
      default:
        return null;
    }
  }

  private getRandomName(): string {
    const firstNames = ['John', 'Alice', 'Bob', 'Emma', 'Michael'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Taylor'];
    const firstName = this.getRandomElement(firstNames);
    const lastName = this.getRandomElement(lastNames);
    return `${firstName} ${lastName}`;
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }

  private getRandomBoolean(): boolean {
    return Math.random() < 0.5; // Adjust as needed
  }

  private getRandomElement<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  private getRandomImageUrl(): string {
    return this.imageUrls[Math.floor(Math.random() * this.imageUrls.length)];
  }
}
