import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { graphql } from "gql.tada"

const query = graphql(
  `query Query {
    pokemon_v2_pokemon(limit: 16) {
      id
      name
      weight
    }
  }`,
)

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: createHttpLink({ uri: "https://beta.pokeapi.co/graphql/v1beta" }),
})

const result = await client.query({ query: query })

console.table(result.data.pokemon_v2_pokemon)
