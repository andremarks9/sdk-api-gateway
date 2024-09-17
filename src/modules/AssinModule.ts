import { Logger } from '@duaneoli/logger'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { DocumentService } from '../services/DocumentService'
import { EnvelopeService } from '../services/EnvelopeService'
import { EnvelopeSignerService } from '../services/EnvelopeSignerService'
import { TokenService } from '../services/JWTService'
import { SignEnvelopeService } from '../services/SignEnvelopeService'
import { TagService } from '../services/TagService'
import { DecoratorConfig } from '../types/types'

@Global()
@Module({})
export class AssinModule {
  static config: DecoratorConfig

  static forRoot(config?: DecoratorConfig): DynamicModule {
    this.config = config
    const services = [
      TokenService,
      EnvelopeService,
      EnvelopeSignerService,
      TagService,
      DocumentService,
      SignEnvelopeService
    ]
    const providers = [...services]
    const imports = [JwtModule.register({ secret: this.config.secretKey })]
    const exports = [...services, JwtModule]

    if (this.config.debug) Logger.debug('AuthenticationModule Inicialized')

    return {
      global: true,
      module: AssinModule,
      imports,
      providers,
      exports,
    }
  }
}
