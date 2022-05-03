import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Recipe } from "./entity/Recipe";
import { Ingredient } from "./entity/Ingredient";
import express, { Express, Request, Response } from "express";

AppDataSource.initialize()
  .then(async () => {
    const app: Express = express();
    const port = "8000";

    app.get("/", (req: Request, res: Response) => {
      res.send("Server is up!");
    });

    app.get("/users", async (req: Request, res: Response) => {
      const users = await AppDataSource.manager.find(User);
      res.send(users);
    });

    app.post("/users", async (req: Request, res: Response) => {
      const user = new User();
      user.firstName = "Timber";
      user.lastName = "Saw";
      const recipe = new Recipe();
      recipe.title = "Drink #1";
      recipe.description = "Cool new drink";
      recipe.author = user;
      await AppDataSource.manager.save(user);
      res.send(user);
    });

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => console.log(error));
