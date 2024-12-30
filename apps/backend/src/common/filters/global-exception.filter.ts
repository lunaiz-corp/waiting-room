import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';

import { FastifyReply } from 'fastify';

import APIException from '../dto/APIException.dto';

// HttpException, APIException ...
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: FastifyReply<any> = ctx.getResponse<FastifyReply>();

    const responseAt: string = new Date().toISOString();

    let status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | object | APIException =
      '내부 서버 오류가 발생했습니다.';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse();
    }

    if (exception instanceof APIException) {
      response.status(exception.status).send({
        code: HttpStatus[exception.status],
        status: exception.status,

        data: exception.data,
        message: exception.message,
        responseAt: responseAt,
      });
      return;
    }

    response.status(status).send({
      code: HttpStatus[status],
      status: status,

      message: message['message'] || message['error'] || message,
      responseAt: responseAt,
    });
  }
}

// WsException ...
@Catch()
export class GlobalWsExceptionFilter extends BaseWsExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const client = host.switchToWs().getClient();
    this.handleError(client, exception);
  }

  handleError(client: any, exception: any) {
    if (!(exception instanceof WsException)) {
      return this.handleUnknownError(exception, client);
    }

    const message = exception.getError();
    client.emit('exception', {
      status: 'error',
      message: message,
      data: null,
      responseAt: new Date().toISOString(),
    });
  }

  handleUnknownError(exception: any, client: any) {
    client.emit('exception', {
      status: 'error',
      message: '내부 서버 오류가 발생했습니다.',
      data: exception,
      responseAt: new Date().toISOString(),
    });
  }
}
