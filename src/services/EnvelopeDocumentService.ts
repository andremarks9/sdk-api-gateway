import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateAndRemoveEnvelopeDocumentType } from '../types/envelopeDocumentTypes'
import { TokenService } from './JWTService'

export class EnvelopeDocumentService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {}

  async createAndRemoveDocument(method: 'set' | 'remove', body: CreateAndRemoveEnvelopeDocumentType, userId?: string) {
    const userJWT = this.tokenService.get(userId)
    const result = await axios.post(`${AssinModule.config.apiPath}/documents/${method}/envelop`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
