import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AddModule } from './add/app.module';
import { TaskModule } from './task/task.module';
import { CategorieModule } from './categorie/categorie.module'; // Ajout de CategorieModule
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database.config';

@Module({
  imports: [
    TaskModule,
    AddModule,
    SequelizeModule.forRoot(dataBaseConfig),
    CategorieModule, // Ajout du CategorieModule ici
  ],
  providers: [AppService],
})
export class AppModule {}
