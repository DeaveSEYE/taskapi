import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CallbackFunction, VercelRequest, VercelResponse } from '@vercel/node';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

let cachedServer: CallbackFunction;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addServer('/')
    .addTag('Your API Tag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.init(); // N'appelez pas `listen`, car Vercel gère les requêtes directement
  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  cachedServer(req, res);
}
