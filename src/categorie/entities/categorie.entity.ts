import { ApiProperty } from '@nestjs/swagger';
import { Column, Table, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'categories' })
export class Categorie extends Model {
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
    example: 'categorie',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categorie: string;

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
}
