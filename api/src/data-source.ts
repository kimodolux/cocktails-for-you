import "reflect-metadata";
import { DataSource } from "typeorm";
import { Ingredient } from "./entity/Ingredient";
import { Recipe } from "./entity/Recipe";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres@2020",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Recipe, Ingredient],
  migrations: [],
  subscribers: [],
});
