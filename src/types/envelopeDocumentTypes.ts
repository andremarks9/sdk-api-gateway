type CreateAndRemoveData = {
  id: string
}

type CreateAndRemoveEnvelopeDocument = {
  envelopeId: string
  documents: Array<CreateAndRemoveData>
}

export type CreateAndRemoveEnvelopeDocumentType = {
  soft: boolean
  data: Array<CreateAndRemoveEnvelopeDocument>
}
