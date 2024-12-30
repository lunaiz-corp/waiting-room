import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsException,
} from '@nestjs/websockets';

import { QueueService } from './queue.service';
import { JoinRequestDto } from './dto/JoinRequest.dto';

@WebSocketGateway({ cors: true })
export class QueueGateway {
  constructor(private readonly queueService: QueueService) {}

  @SubscribeMessage('ts:join')
  async handleJoinEvent(@MessageBody() data: JoinRequestDto): Promise<string> {
    if (!data.clientId || !data.userKey || !data.funnelKey) {
      throw new WsException('Bad request (missing required fields)');
    }

    const clientInfo = await this.queueService.getClientInfo(
      data.clientId,
      data.funnelKey,
    );

    return 'Hello world!';
  }

  @SubscribeMessage('ts:heartbeat')
  handleHeartbeatEvent(@MessageBody() data: string): string {
    return 'Hello world!';
  }

  @SubscribeMessage('ts:closed')
  handleClosedEvent(@MessageBody() data: string): string {
    return 'Hello world!';
  }
}
