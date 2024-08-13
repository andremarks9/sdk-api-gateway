export type EnvelopeSignerQuery = {
  filters?: {
    signerId: string
    envelopeId: string
    order: number
    signatureToken: string
    signatureType: string
    assigned: boolean
    requirePersonalDocument: boolean
    requireEmailToken: boolean
    requireRubric: boolean
    requireSignature: boolean
    createdAt: string
    updatedAt: string
  }
  includes?: Array<string>
  sortBy?: {
    envelopeId: 'DESC' | 'ASC'
    signerId: 'DESC' | 'ASC'
    order: 'DESC' | 'ASC'
    signatureToken: 'DESC' | 'ASC'
    signatureType: 'DESC' | 'ASC'
    assigned: 'DESC' | 'ASC'
    requirePersonalDocument: 'DESC' | 'ASC'
    requireEmailToken: 'DESC' | 'ASC'
    requireRubric: 'DESC' | 'ASC'
    requireSignature: 'DESC' | 'ASC'
    createdAt: 'DESC' | 'ASC'
    updatedAt: 'DESC' | 'ASC'
  }
  page?: number
  pageSize?: number
}

type CreateData = {
  order: number
  signatureToken: string
  signatureType: string
  assigned: boolean
  requirePersonalDocument: boolean
  requireEmailToken: boolean
  requireRubric: boolean
  requireSignature: boolean
  email: string
  fullName: string
}

export type CreateEnvelopeSignerData = {
  data: Array<CreateData>
  envelopeId: string
}

type DeleteData = {
  signerId: string
}

export type DeleteEnvelopeSignerData = {
  data: Array<DeleteData>
  envelopeId: string
}

type ResendNotificationData = {
  signerId: string
}

export type ResendNotificationEnvelopeSigner = {
  data: Array<ResendNotificationData>
  envelopeId: string
}
