import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import { graphqlHTTP } from "express-graphql"
import "dotenv-defaults/config"
import { buildSchema } from 'type-graphql';
import { RecipieResolver } from './schema/recipie/recipie.resolver';

const app: Express = express();
const port = process.env.WS_PORT;

// ES2022 = Top level await, yay!

const schema = await buildSchema({
    resolvers: [RecipieResolver],
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`[main]: Server is running ::${port} 🚀`)
})  