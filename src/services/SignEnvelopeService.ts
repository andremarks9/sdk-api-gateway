import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { ValidatePersonalDocumentValidationDTO } from '../types/signEnvelopeTypes'
import { TokenService } from './JWTService'

export class SignEnvelopeService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {}

  async validateEnvelopeSignerPersonalDocument(
    body: ValidatePersonalDocumentValidationDTO,
    userId?: string,
  ) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.put(`${AssinModule.config.apiPath}/sign-envelope/personal-document/validate`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
