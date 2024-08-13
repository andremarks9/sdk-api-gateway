import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateEnvelopeData, EnvelopeQuery } from '../types/envelopeTypes'
import { TokenService } from './JWTService'

export class EnvelopeService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {}

  async listEnvelope(query?: EnvelopeQuery, userId?: string) {
    const userJWT = this.tokenService.get(userId)
    const result = await axios.get(`${AssinModule.config.apiPath}/envelope`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
      params: query,
    })

    return result.data
  }

  async createEnvelope(body: Array<CreateEnvelopeData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.post(`${AssinModule.config.apiPath}/envelope`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
