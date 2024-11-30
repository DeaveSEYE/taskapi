import { ApiProperty } from '@nestjs/swagger';

export enum Priority {
  High = 'eleve',
  Medium = 'moyenne',
  Low = 'basse',
}

export class CreateTaskDto {
  @ApiProperty({
    example: 'title',
    required: true,
  })
  title: string;
  @ApiProperty({
    example: 'categorie',
    required: true,
  })
  categorie: string;
  @ApiProperty({
    example: 'description',
    required: true,
  })
  description: string;
  @ApiProperty({ example: 'eleve', enum: Priority })
  priority: Priority;
  @ApiProperty({
    example: 'isChecked',
    required: true,
  })
  isChecked: boolean;
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
  dueDate: Date;
}
