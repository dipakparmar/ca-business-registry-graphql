import type { CORSOptions, YogaInitialContext } from '@graphql-yoga/node'

export type Context = YogaInitialContext

export type CreateServerProps = {
  cors?: CORSOptions
  graphiql?: boolean
  graphqlEndpoint?: string
  landingPage?: boolean
}

export type SearchResponse = {
  keyword: string
  count: number
  docs: SearchResponseDoc[]
  paging: SearchResponsePaging
}

export type SearchResponseDoc = {
  Registry_Source: string
  Jurisdiction: string
  version: string
  Company_Name: string
  text: string[]
  BN: string
  MRAS_ID: string
  Juri_ID: string
  Reg_office_city: string
  City: string
  Reg_office_province: string
  Status_State: string
  Status_Date?: string
  Status_Notes: string
  Entity_Type: string
  Date_Incorporated: string
  Alternate_Name: string[]
  Reg_date_XPR_juri?: string[]
  HJ_ID: string[]
  HJ_entity_ID: string[]
  HJ_entity_name?: string[]
  MRAS_Entity_Type: string
  XP_TYPE: string
  Display_Date: string
  Data_Source: string
  _version_: number // not needed
  hierarchy: string
}

export type SearchResponsePaging = {
  previous: number
  next: number
}

export type SearchResponseParams = {
  fq: string
  location?: string
  lang: string
  queryaction: string
  sortfield: string
  sortorder: string
}
