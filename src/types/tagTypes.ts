enum ElementType {
  SIGNATURE = 'SIGNATURE',
  RUBRIC = 'RUBRIC',
  SIGNATURE_DATETIME = 'SIGNATURE_DATETIME',
  FULL_NAME = 'FULL_NAME',
  EMAIL = 'EMAIL',
  SELECTION_BOX = 'SELECTION_BOX',
}

export type TagQuery = {
  filters?: {
    id: string
    signerId: string
    documentId: string
    angle: number
    elementType: ElementType
    content: string
    axisX: number
    axisY: number
    page: number
    createdAt: string
    updatedAt: string
  }
  includes?: Array<string>
  sortBy?: {
    id: 'DESC' | 'ASC'
    signerId: 'DESC' | 'ASC'
    documentId: 'DESC' | 'ASC'
    angle: 'DESC' | 'ASC'
    elementType: 'DESC' | 'ASC'
    content: 'DESC' | 'ASC'
    axisX: 'DESC' | 'ASC'
    axisY: 'DESC' | 'ASC'
    page: 'DESC' | 'ASC'
    createdAt: 'DESC' | 'ASC'
    updatedAt: 'DESC' | 'ASC'
  }
  page?: number
  pageSize?: number
}

type CreateData = {
  signerId: string
  documentId: string
  angle: number
  elementType: ElementType
  content: string
  axisX: number
  axisY: number
  page: number
}

export type CreateTagData = {
  data: Array<CreateData>
  envelopeId: string
}

type DeleteData = {
  signerId: string
}

export type DeleteTagData = {
  data: Array<DeleteData>
  envelopeId: string
}
