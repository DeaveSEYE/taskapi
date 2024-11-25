import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

let cachedServer: Function;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addServer('https://taskapi-blue.vercel.app/api-docs')
    .addTag('Your API Tag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.init(); // Ne pas appeler `listen()`, Vercel gère la fonction serverless

  // Retourne l'instance du serveur une fois initialisé
  return app.getHttpAdapter().getInstance();
}

// Fonction handler pour Vercel
export default async function handler(req, res) {
  if (!cachedServer) {
    cachedServer = await bootstrap(); // Initialiser le serveur uniquement une fois
  }
  cachedServer(req, res); // Gérer la requête avec l'instance du serveur
}
