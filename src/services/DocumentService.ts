import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateDocumentData } from '../types/documentTypes'
import { TokenService } from './JWTService'

export class DocumentService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {}

  // async listDocument(query: DocumentQuery, userId: string) {
  //   const userJWT = this.tokenService.get(userId)

  //   const result = await axios.get(`${AssinModule.config.apiPath}/documents`, {
  //     headers: { Accept: 'application/json', Authorization: `Bearer ${userJWT}` },
  //     params: query,
  //   })

  //   return result.data
  // }

  async createDocument(body: Array<CreateDocumentData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.post(`${AssinModule.config.apiPath}/documents`, body, {
      headers: { Accept: 'application/json', Authorization: `Bearer ${userJWT}` },
    })

    return result.data
  }
}
