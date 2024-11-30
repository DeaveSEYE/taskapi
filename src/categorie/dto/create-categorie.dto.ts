import { ApiProperty } from '@nestjs/swagger';

export class CreateCategorieDto {
  @ApiProperty({
    example: 'categorie',
    required: true,
  })
  categorie: string;
  @ApiProperty({
    example: 'categorieColor',
    required: true,
  })
  categorieColor: string;
  @ApiProperty({
    type: Date,
    required: false,
  })
  createdAt: Date;
  updatedAt: Date;
}
