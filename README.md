# GraphQL API for Canada Business Registry

A GraphQL API for retrieving information about businesses registered in Canada. The API is built using GraphQL, a modern and flexible query language for APIs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them:

- Node.js v16 or higher
- npm v6 or higher
- yarn or npm package manager ( I prefer yarn )

### Installing

1. Install as dependency:
   ```bash
   yarn add @dipakparmar/ca-business-registry-graphql
   ```
2. Setup a server using the following code:

   ```js
   import { createCABusinessRegistryGraphQLServer } from '@dipakparmar/ca-business-registry-graphql'

   const server = createCABusinessRegistryGraphQLServer({
     landingPage: true,
     graphqlEndpoint: '/alpha/graphql',
     graphiql: true,
   })

   server.listen(4000, () => {
     console.log('🚀 Server ready at http://localhost:4000')
   })
   ```

3. Start the dev server:
   ```bash
   yarn dev
   ```

The server should now be running on http://localhost:4000 or port specified in .env file. You can now open the GraphQL Playground at http://localhost:4000/alpha/graphql to start querying the API.

## Usage

The API supports the following query fields:

- SearchBusiness(keyword: String, page: Int): BusinessSearchResult

# Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -ams -S 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create a new Pull Request

## License

This project is licensed with the [AGPL-3.0 License](https://github.com/dipakparmar/ca-business-registry-graphql/blob/main/LICENSE).
