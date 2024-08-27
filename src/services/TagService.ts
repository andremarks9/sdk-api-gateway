import { Inject } from '@nestjs/common'
import axios from 'axios'
import { AssinModule } from '../modules/AssinModule'
import { CreateTagData, DeleteTagData } from '../types/tagTypes'
import { TokenService } from './JWTService'

export class TagService {
  constructor(@Inject(TokenService) private readonly tokenService: TokenService) {}

  // async listTag(query: TagQuery, userId: string) {
  //   const userJWT = this.tokenService.get(userId)

  //   const result = await axios.get(`${AssinModule.config.apiPath}/tags`, {
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${userJWT}`,
  //     },
  //     params: query,
  //   })

  //   return result.data
  // }

  async createTag(body: Array<CreateTagData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.post(`${AssinModule.config.apiPath}/tags`, body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }

  async deleteTag(body: Array<DeleteTagData>, userId?: string) {
    const userJWT = this.tokenService.get(userId)

    const result = await axios.delete(`${AssinModule.config.apiPath}/tags`, {
      data: body,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${userJWT}`,
      },
    })

    return result.data
  }
}
