import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieDto } from './create-categorie.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategorieDto extends PartialType(CreateCategorieDto) {
  @ApiProperty({
    example: 'categorie',
    required: false,
  })
  categorie?: string;

  @ApiProperty({
    example: 'categorieColor',
    required: false,
  })
  categorieColor?: string;
  @ApiProperty({
    type: Date,
    required: false,
  })
  createdAt: Date;
  updatedAt: Date;
}
