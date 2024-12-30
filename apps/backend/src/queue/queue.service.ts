import { Injectable, Logger } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SqsService } from '@ssut/nestjs-sqs';

import { Client } from 'src/common/repositories/client.entity';

@Injectable()
export class QueueService {
  private readonly logger = new Logger(QueueService.name);

  constructor(
    private readonly sqsService: SqsService,

    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  public async queryFunnel(clientId: string, funnelKey: string) {
    const client = await this.clientRepository.findOne({
      where: { id: clientId, isActive: true },
      relations: {
        funnels: true,
      },
    });
    if (!client) throw new WsException('Not Found (client not found)');
    if (!client.isActive)
      throw new WsException('Forbidden (client is inactive)');

    const funnel = client.funnels.find((funnel) => funnel.id === funnelKey);
    if (!funnel) throw new WsException('Not Found (funnel not found)');
    if (!funnel.isActive)
      throw new WsException('Forbidden (funnel is inactive)');

    if (!client.skins.includes(funnel.skin))
      throw new WsException(
        'Internal Server Error (wrong configuration detected)',
      );

    return {
      client,
      funnel,
    };
  }

  public async getClientInfo(clientId: string, funnelKey: string) {
    const { client, funnel } = await this.queryFunnel(clientId, funnelKey);

    return {
      clientId: client.id,
      clientName: client.name,
      clientSecret: client.secret,
      funnelKey: funnel.id,
    };
  }

  public async joinQueue(clientId: string, funnelKey: string, userKey: string) {
    const { client, funnel } = await this.queryFunnel(clientId, funnelKey);

    this.logger.log(
      `Join request from ${userKey} to ${funnelKey} of ${clientId}`,
    );
  }
}
