import { Injectable, NotFoundException } from '@nestjs/common';
import { CineastRepository } from './cineast.repository';
import { EntitySaveService } from 'src/adapter/save.service';
import { Cineast } from './entities/cineast.entity';
import { NOT_FOUND_ERROR_ID } from './cineast.error-codes';
import { CineastInputDto } from './dto/cineast.input.dto';
import { CommonOutputDto } from 'src/common/dto/common.dto';
import { ImageService } from 'src/image/image.service';

@Injectable()
export class CineastService {
  constructor(private readonly cineastRepository: CineastRepository, private readonly entitySaveService: EntitySaveService, private readonly imageService: ImageService) {}

  async createCineast(input: CineastInputDto.CreateCineastInput): Promise<CommonOutputDto.SuccessOutput> {
    try {
      const cineast = new Cineast();

      await this.imageService.assignImageToMedia(input.ImageId, cineast, this.entitySaveService);

      cineast.fullName = input.FullName;
      cineast.profession = input.Profession;
      cineast.dateOfBirth = input.DateOfBirth;
      cineast.bio = input.Bio;
      cineast.gender = input.Gender;
      cineast.country = input.Country;
      cineast.award = input.Award;

      this.entitySaveService.push(cineast);
      await this.entitySaveService.saveMultiple();

      return { isSuccess: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findCineastById(ID: string): Promise<Cineast> {
    try {
      const series = await this.cineastRepository.findCineastById(ID);
      if (!series) {
        throw new NotFoundException(NOT_FOUND_ERROR_ID);
      }

      return series;
    } catch (error) {
      throw new Error(error);
    }
  }
}
