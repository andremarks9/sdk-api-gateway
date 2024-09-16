import { ExceptionDTO } from '@duaneoli/base-project-nest'
import { HttpException, Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateAndRemoveEnvelopeDocumentType } from '../types/envelopeDocumentTypes'
import { CancelEnvelopeData, CloseEnvelopeData, CreateEnvelopeData, EnvelopeQuery } from '../types/envelopeTypes'
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

  async closeEnvelope(body: Array<CloseEnvelopeData>, userId?: string) {
    try {
      const userJWT = this.tokenService.get(userId)

      const result = await axios.put(`${AssinModule.config.apiPath}/envelope/close`, body, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${userJWT}`,
        },
      })

      return result.data
    } catch (cause) {
      const error = ExceptionDTO.warn(
        cause.response.data.errorCode,
        cause.response.data.message,
        cause.response.data.rejectedInputs,
      )
      throw new HttpException(cause.response.data.error, cause.response.data.statusCode, { cause: error })
    }
  }

  async cancelEnvelope(body: Array<CancelEnvelopeData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.put(`${AssinModule.config.apiPath}/envelope/cancel`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }

  async createAndRemoveDocument(method: 'set' | 'remove', body: CreateAndRemoveEnvelopeDocumentType, userId?: string) {
    const userJWT = this.tokenService.get(userId)
    const result = await axios.post(`${AssinModule.config.apiPath}/envelope/${method}/document`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
