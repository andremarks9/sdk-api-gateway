import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateEnvelopeSignerData, DeleteEnvelopeSignerData, EnvelopeSignerQuery } from '../types/envelopeSignerTypes'
import { TokenService } from './JWTService'

export class EnvelopeSignerService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {} //,

  async listEnvelopeSigner(query: EnvelopeSignerQuery, userId: string) {
    const userJWT = this.tokenService.get(userId)
    const result = await axios.get(`${AssinModule.config.apiPath}/envelope-signer`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
      params: query,
    })

    return result.data
  }

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
}
