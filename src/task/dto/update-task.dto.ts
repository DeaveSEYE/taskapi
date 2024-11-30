import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto, Priority } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    example: 'title',
    required: false,
  })
  title?: string;
  @ApiProperty({
    example: 'categorie',
    required: false,
  })
  categorie?: string;
  @ApiProperty({
    example: 'description',
    required: false,
  })
  description?: string;
  @ApiProperty({ example: 'High', required: false, enum: Priority })
  priority?: Priority;
  @ApiProperty({
    example: 'isChecked',
    required: true,
  })
  isChecked?: boolean;
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
  dueDate: Date;
}
