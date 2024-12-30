import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

import { Funnel } from './funnel.entity';

@Entity()
export class Client {
  /**
   * 접속하는 서비스 ID (clientId)
   * @example 'wakttu-shared'
   */
  @PrimaryColumn()
  id: string;

  /**
   * 서비스 이름
   * @example '왁뚜'
   */
  @Column()
  name: string;

  /**
   * 쿠키 암호화에 사용하는 비밀키
   * @example d2FrdHR1LXNoYXJlZA
   */
  @Column()
  secret: string;

  /**
   * 이용 가능한 스킨 목록
   * @example ['default', 'wakttu']
   */
  @Column('varchar', { array: true })
  skins: string[];

  /**
   * 퍼넬 목록
   * funnel 테이블과 Relation
   * @example ['socket-join']
   */
  @OneToMany(() => Funnel, (funnel) => funnel.client)
  funnels: Funnel[];

  /**
   * 서비스 활성화 여부
   * @example true
   */
  @Column({ default: true })
  isActive: boolean;
}

export default Client;
