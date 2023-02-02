import { createCABusinessRegistryGraphQLServer } from '../src/index' // Import the published package instead of the source code

const server = createCABusinessRegistryGraphQLServer({
  landingPage: true,
  graphqlEndpoint: '/alpha/graphql',
  graphiql: true,
})

// Find the port from the environment variables and check if is valid use as it can be used by other services on the same machine
const port = process.env.PORT || 4000
const isPortValid = !isNaN(Number(port))

if (!isPortValid) {
  throw new Error('Invalid port')
}

server.listen(port, () => {
  console.log('Server is running on http://localhost:4000')
})
