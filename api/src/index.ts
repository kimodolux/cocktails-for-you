import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import expressPlayground from "graphql-playground-middleware-express";

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

AppDataSource.initialize()
  .then(async () => {
    const app: Express = express();
    const port = "8000";

    app.get("/", (req: Request, res: Response) => {
      res.send("Server is up!");
    });

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );

    app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => console.log(error));
