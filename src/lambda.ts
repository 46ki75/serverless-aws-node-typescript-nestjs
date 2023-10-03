import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';

const binaryMimeTypes: string[] = [];

async function bootstrapServer(): Promise<express.Express> {
  const expressServer = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressServer),
  );
  await app.init();
  return expressServer;
}

let cachedServer: express.Express;

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const expressServer = await bootstrapServer();
    cachedServer = serverlessExpress.createServer(
      expressServer,
      undefined,
      binaryMimeTypes,
    );
  }

  return serverlessExpress.proxy(cachedServer, event, context, 'PROMISE')
    .promise;
};
