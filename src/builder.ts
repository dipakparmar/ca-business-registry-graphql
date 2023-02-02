import {
  SearchResponse,
  SearchResponsePaging,
  SearchResponseDoc,
} from './types'
import SchemaBuilder from '@pothos/core'
import { Context } from './types'
import { GraphQLJSONObject } from 'graphql-scalars'

const builder = new SchemaBuilder<{
  Scalars: {
    JSON: {
      Output: unknown
      Input: JSON
    }
  }
  Objects: {
    SearchBusinessResponse: SearchResponse
    SearchResponsePaging: SearchResponsePaging
    SearchResponseDoc: SearchResponseDoc
  }
  Context: Context
}>({})

builder.addScalarType('JSON', GraphQLJSONObject, {})
builder.queryType({})

export { builder }
