import { type ResultOf, graphql } from "gql.tada"
import { print } from "graphql"

const query = graphql(
  `query Query {
    pokemon_v2_pokemon(limit: 16) {
      id
      name
      weight
    }
  }`,
)

const resp = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: print(query) }),
})

const json = await resp.json()

const result = json.data as ResultOf<typeof query>

console.table(result.pokemon_v2_pokemon)
