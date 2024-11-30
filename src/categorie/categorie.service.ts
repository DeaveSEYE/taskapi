import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategorieService {
  constructor(
    @InjectModel(Categorie)
    private categorieRepository: typeof Categorie,
  ) {}

  create(createCategorieDto: CreateCategorieDto) {
    return this.categorieRepository.create(createCategorieDto as any);
  }

  findAll() {
    return this.categorieRepository.findAll();
  }

  findOne(id: number) {
    return this.categorieRepository.findOne({ where: { id } });
  }

  update(id: number, updateCategorieDto: UpdateCategorieDto) {
    const condition = { where: { id: id } };
    this.categorieRepository.update(updateCategorieDto as any, condition);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.categorieRepository.destroy({ where: { id } });
    return result > 0;
  }
}
