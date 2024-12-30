import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';

import { Client } from './client.entity';

@Entity()
export class Funnel {
  /**
   * 유량제어가 설치된 액션 ID (funnelKey)
   * @example 'socket-join'
   */
  @PrimaryColumn()
  id: string;

  /**
   * (내부 관리용) 액션 이름
   * @example 'socket_connect'
   */
  @Column()
  name: string;

  /**
   * 클라이언트 ID (clientId)
   * client 테이블과 Relation
   * @example 'wakttu-shared'
   */
  @ManyToOne(() => Client, (client) => client.id)
  client: Client;

  /**
   * 최대 동시 접속자 수
   * @example 100
   */
  @Column()
  capacity: number;

  /**
   * 설정된 스킨 값
   * @example 'default'
   */
  @Column()
  skin: string;

  /**
   * 퍼넬 활성화 여부
   * @example true
   */
  @Column({ default: true })
  isActive: boolean;
}

export default Funnel;
