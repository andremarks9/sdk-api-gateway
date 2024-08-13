import { Logger } from '@duaneoli/logger'
import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AssinModule } from '../modules/AssinModule'

@Injectable()
export class TokenService {
  private tokenDefault
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {
    if (AssinModule.config.debug) Logger.debug(`TokenService::constructor`)
  }

  private generate(userId: string, time: '5m' | 'notExpired') {
    return this.jwtService.sign(
      {
        publicKey: AssinModule.config.publicKey,
        moreInfo: { userId },
      },
      {
        expiresIn: time === '5m' ? '5m' : undefined,
      },
    )
  }

  get(userId?: string) {
    if (userId) return this.generate(userId, '5m')
    else if (!this.tokenDefault) this.tokenDefault = this.generate(AssinModule.config.defaultUserId, 'notExpired')
    return this.tokenDefault
  }
}
