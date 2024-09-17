import { EnvelopeSignerPersonalDocumentStatus } from "../services/EnvelopeSignerService"

export type ValidatePersonalDocumentValidationDTO = {
    status: EnvelopeSignerPersonalDocumentStatus.REJECTED | EnvelopeSignerPersonalDocumentStatus.VERIFIED
    log:string
}