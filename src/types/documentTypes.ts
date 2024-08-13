export type DocumentQuery = {
  filters?: {
    id: string
    envelopId: string
    userId: string
    companyId: string
    alias: string
    url: string
    createdFrom: string
    createdAt: string
    updatedAt: string
  }
  includes?: Array<string>
  sortBy?: {
    id: 'DESC' | 'ASC'
    envelopId: 'DESC' | 'ASC'
    userId: 'DESC' | 'ASC'
    companyId: 'DESC' | 'ASC'
    alias: 'DESC' | 'ASC'
    url: 'DESC' | 'ASC'
    createdFrom: 'DESC' | 'ASC'
    createdAt: 'DESC' | 'ASC'
    updatedAt: 'DESC' | 'ASC'
  }
  page?: number
  pageSize?: number
}

enum CreatedFrom {
  API = 'API',
  UI = 'UI',
}

type CreateData = {
  alias: string
  envelopId?: string
  companyId: string
  createdFrom: CreatedFrom
  url: string
}

export type CreateDocumentData = {
  soft: boolean
  data: Array<CreateData>
}
