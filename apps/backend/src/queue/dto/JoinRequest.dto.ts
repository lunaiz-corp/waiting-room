export interface JoinRequestDto {
  /**
   * 접속하는 서비스 ID (clientId)
   * @example 'wakttu-shared'
   */
  clientId: string;

  /**
   * 서비스에서 관리하는 사용자 Key (userKey)
   * @example 'kms0219kms'
   */
  userKey: string;

  /**
   * 유량제어가 설치된 액션 ID (funnelKey)
   * @example 'socket-join'
   */
  funnelKey: string;
}

export default JoinRequestDto;
