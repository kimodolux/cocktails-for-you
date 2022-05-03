import { AppDataSource } from "../data-source";
import { Recipe } from "../entity/Recipe";

export default {
  Query: {
    recipes: async () => await AppDataSource.manager.find(Recipe),
    // author: (_, { id }) => find(authors, { id }),
  },

  Mutation: {
    createRecipe: async (_, data) => {
      try {
        const { title, description } = data.recipe;
        let newRecipe = new Recipe();
        newRecipe.title = title;
        newRecipe.description = description;
        await AppDataSource.manager.save(newRecipe);
        let result = {
          success: true,
        };
        return result;
      } catch (err) {
        let result = {
          success: false,
        };
        return result;
      }
    },
  },
};
