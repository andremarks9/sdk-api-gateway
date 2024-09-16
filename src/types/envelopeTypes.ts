export type CreateEnvelopeData = {
  title: string
  description: string
  expiredAt: string
}

export type CloseEnvelopeData = {
  id: string
}

export type CancelEnvelopeData = {
  id: string
}

export type EnvelopeQuery = {
  filters?: {
    id: string
    userId: string
    companyId: string
    title: string
    description: string
    status: string
    expiredAt: string
    createdAt: string
    updatedAt: string
  }
  includes?: Array<string>
  sortBy?: {
    id?: 'DESC' | 'ASC'
    userId?: 'DESC' | 'ASC'
    companyId?: 'DESC' | 'ASC'
    title?: 'DESC' | 'ASC'
    description?: 'DESC' | 'ASC'
    status?: 'DESC' | 'ASC'
    expiredAt?: 'DESC' | 'ASC'
    createdAt?: 'DESC' | 'ASC'
    updatedAt?: 'DESC' | 'ASC'
  }
  page?: number
  pageSize?: number
}
