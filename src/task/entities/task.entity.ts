import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, Model, DataType } from 'sequelize-typescript';
import { Priority } from '../dto/create-task.dto'; // Assurez-vous que le fichier contenant l'énumération Priority est correctement importé.

@Table({ tableName: 'tasks' })
export class Task extends Model {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @ApiProperty({
    example: 'title',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'categorie',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categorie: string;

  @ApiProperty({
    example: 'description',
    required: true,
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 'eleve',
    enum: Priority,
  })
  @Column({
    type: DataType.ENUM(...Object.values(Priority)),
    allowNull: false,
  })
  priority: Priority;

  @ApiProperty({
    example: true,
    required: true,
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isChecked: boolean;

  @ApiProperty({
    example: 'categorieColor',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categorieColor: string;

  @ApiProperty({
    type: Date,
    required: false,
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    required: false,
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;

  @ApiProperty({
    type: Date,
    required: false,
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
  })
  dueDate: Date;
}