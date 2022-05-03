import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Recipe {
    id: Int!
    title: String
    description: String
  }

  input RecipeInput {
    id: Int!
    title: String
    description: String
  }

  type Response {
    success: Boolean
  }

  type Query {
    recipes: [Recipe]
  }

  type Mutation {
    createRecipe(recipe: RecipeInput): Response
  }
`;
export default typeDefs;
