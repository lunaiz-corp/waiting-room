import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client } from 'src/common/repositories/client.entity';
import { Funnel } from 'src/common/repositories/funnel.entity';

import { QueueGateway } from './queue.gateway';
import { QueueService } from './queue.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Funnel])],
  providers: [QueueGateway, QueueService],
})
export class QueueModule {}
