import { Injectable } from '@nestjs/common';

@Injectable()
export class MockService {
  // Generates mock data based on the provided entity structure and count
  generateMockData<T>(entity: Record<string, any>, count: number): T[] {
    const mockData: T[] = [];

    // Generate 'count' number of records
    for (let i = 0; i < count; i++) {
      const mockRecord: T = {} as T;

      // Generate random values for each property in the entity
      for (const [key, value] of Object.entries(entity)) {
        mockRecord[key] = this.generateRandomValue(value);
      }

      mockData.push(mockRecord);
    }

    return mockData;
  }

  // Recursively generates random values based on the type of the property
  private generateRandomValue(value: any): any {
    if (typeof value === 'string') {
      return this.generateRandomString(value);
    } else if (typeof value === 'number') {
      return this.generateRandomNumber(value);
    } else if (typeof value === 'boolean') {
      return this.generateRandomBoolean(value);
    } else if (Array.isArray(value)) {
      return this.createArray(Math.floor(Math.random() * 3)).map(() => this.generateRandomValue(value[0]));
    } else if (typeof value === 'object') {
      const newObj: Record<string, any> = {};

      // Recursively generate random values for each property in the object
      for (const [key, innerValue] of Object.entries(value)) {
        newObj[key] = this.generateRandomValue(innerValue);
      }

      return newObj;
    }

    // If the type is not recognized, return the original value
    return value;
  }

  // Generates a random string with shuffled characters for a more natural look
  private generateRandomString(originalString: string): string {
    const words = originalString.split(' ');
    const randomizedWords = words.map((word) => this.shuffleString(word));

    return randomizedWords.join(' ');
  }

  // Shuffles the characters in a string
  private shuffleString(str: string): string {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }

  // Generates a random number based on the double of the original number
  private generateRandomNumber(originalNumber: number): number {
    return Math.floor(Math.random() * originalNumber * 2);
  }

  // Negates the original boolean value
  private generateRandomBoolean(originalBoolean: boolean): boolean {
    return !originalBoolean;
  }

  createArray(length: number): any[] {
    const newArray: any[] = [];

    // You can fill the array with default values here
    // For demonstration purposes, I'm filling it with placeholder strings
    for (let i = 0; i < length; i++) {
      newArray.push(`Item ${i + 1}`);
    }

    return newArray;
  }
}
