import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import {
  CreateEnvelopeSignerData,
  DeleteEnvelopeSignerData,
  ResendNotificationEnvelopeSigner
} from '../types/envelopeSignerTypes'
import { TokenService } from './JWTService'

export enum EnvelopeSignerPersonalDocumentStatus {
  VERIFIED = 'verified',
  REJECTED = 'rejected',
  WAITING = 'waiting',
}
export class EnvelopeSignerService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {} //,

  async createEnvelopeSigner(body: Array<CreateEnvelopeSignerData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.post(`${AssinModule.config.apiPath}/envelope-signer`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }

  async deleteEnvelopeSigner(body: Array<DeleteEnvelopeSignerData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.delete(`${AssinModule.config.apiPath}/envelope-signer`, {
      data: body,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }

  async resendNotification(body: ResendNotificationEnvelopeSigner, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.post(`${AssinModule.config.apiPath}/envelope-signer/resend-notification`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
