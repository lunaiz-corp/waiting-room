import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SqsModule } from '@ssut/nestjs-sqs';
import { redisStore } from 'cache-manager-redis-yet';

import { AppController } from './app.controller';
import { QueueModule } from './queue/queue.module';

import { Client } from './common/repositories/client.entity';
import { Funnel } from './common/repositories/funnel.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',

      url: process.env.DATABASE_URL,
      schema: 'public',
      useUTC: true,

      entities: [Client, Funnel],

      synchronize: process.env.NODE_ENV === 'development',
    }),
    SqsModule.register({
      consumers: [],
      producers: [],
    }),
    process.env.ENABLE_REDIS === '1'
      ? CacheModule.register({
          isGlobal: true,

          store: redisStore,
          url: process.env.REDIS_URI,
        })
      : CacheModule.register({
          isGlobal: true,
        }),
    AppModule,
    QueueModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
