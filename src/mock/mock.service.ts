import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class MockService {
  private imageUrls: string[] = [
    'https://e0.pxfuel.com/wallpapers/804/678/desktop-wallpaper-el-professor-money-heist.jpg',
    'https://wallpapercave.com/wp/wp5854947.jpg',
    'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/MONEYHEIST.jpg',
    'https://c4.wallpaperflare.com/wallpaper/117/646/399/wolf-game-background-weapon-wallpaper-thumb.jpg',
    'https://wallpaperbuzz.net/wp-content/uploads/2023/04/7806444.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7P3LUmmjieVyhxHCf3bZE5SAJ5hy20qlBZw&usqp=CAU',
    'https://i0.wp.com/glassesradar.com/wp-content/uploads/2018/02/MV5BNTRkZDRhZWQtMzViYS00MWRiLTliNTYtMTFkMjEwOTczMTlhXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg',
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
    } else if (key === 'imageUrl') {
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
