import { builder } from '../builder'
import axios from 'axios'

builder.objectType('SearchBusinessResponse', {
  fields: (t) => ({
    count: t.exposeInt('count', {
      description: 'The number of results returned',
    }),
    results: t.field({
      type: ['SearchResponseDoc'],
      description: 'The results of the search',
      resolve: (doc) => doc?.docs ?? [],
    }),
    paging: t.field({
      type: 'SearchResponsePaging',
      description: 'The paging information',
      resolve: (paging) => paging?.paging ?? {},
    }),
  }),
})

builder.objectType('SearchResponseDoc', {
  fields: (t) => ({
    Registry_Source: t.exposeString('Registry_Source'),
    Jurisdiction: t.exposeString('Jurisdiction'),
    version: t.exposeString('version'),
    Company_Name: t.exposeString('Company_Name'),
    text: t.exposeStringList('text'),
    BN: t.exposeString('BN', {
      nullable: true,
    }),
    MRAS_ID: t.exposeString('MRAS_ID'),
    Juri_ID: t.exposeString('Juri_ID'),
    Reg_office_city: t.exposeString('Reg_office_city', {
      nullable: true,
    }),
    City: t.exposeString('City', {
      nullable: true,
    }),
    Reg_office_province: t.exposeString('Reg_office_province', {
      nullable: true,
    }),
    Status_State: t.exposeString('Status_State'),
    Status_Date: t.exposeString('Status_Date', {
      nullable: true,
    }), // is optional
    Status_Notes: t.exposeString('Status_Notes', {
      nullable: true,
    }),
    Entity_Type: t.exposeString('Entity_Type'),
    Date_Incorporated: t.exposeString('Date_Incorporated'),
    Alternate_Name: t.exposeStringList('Alternate_Name', {
      nullable: true,
    }),
    Reg_date_XPR_juri: t.exposeStringList('Reg_date_XPR_juri', {
      nullable: true,
    }),
    HJ_ID: t.exposeStringList('HJ_ID', {
      nullable: true,
    }),
    HJ_entity_ID: t.exposeStringList('HJ_entity_ID', {
      nullable: true,
    }),
    HJ_entity_name: t.exposeStringList('HJ_entity_name', {
      nullable: true,
    }),
    MRAS_Entity_Type: t.exposeString('MRAS_Entity_Type'),
    XP_TYPE: t.exposeString('XP_TYPE'),
    Display_Date: t.exposeString('Display_Date'),
    Data_Source: t.exposeString('Data_Source'),
    // _version_: t.exposeFloat('_version_'),
    hierarchy: t.exposeString('hierarchy'),
  }),
})

builder.objectType('SearchResponsePaging', {
  fields: (t) => ({
    previous: t.exposeInt('previous', {
      description: 'The previous page number',
    }),
    next: t.exposeInt('next', {
      description: 'The next page number',
    }),
  }),
})

builder.queryFields((t) => ({
  SearchBusiness: t.field({
    nullable: true,
    description: 'Search Business by keyword',
    args: {
      keyword: t.arg.string({
        required: true,
        description:
          'Search keyword. Supported Keywords are Business Name, Business Number and Registry ID.',
      }),
      page: t.arg.int({
        required: false,
        description: 'Page number',
      }),
    },
    type: 'SearchBusinessResponse',
    resolve: async (_, { keyword, page }) => {
      const keywordValueURL = encodeURI(keyword)
      const pageValue = page ? page : 0
      const response = await axios.get(
        'https://searchapi.mrasservice.ca/Search/api/v1/search?fq=keyword:%7B' +
          keywordValueURL +
          '%7D+Status_State:Active&lang=en&queryaction=fieldquery&sortfield=score&sortorder=asc' +
          '&page=' +
          pageValue,
      )
      // modify the paging object to only include the numbers instead of the page=0 string
      response.data.paging.previous = response.data.paging.previous.replace(
        'page=',
        '',
      )
      response.data.paging.next = response.data.paging.next.replace('page=', '')

      return response.data
    },
  }),
}))
