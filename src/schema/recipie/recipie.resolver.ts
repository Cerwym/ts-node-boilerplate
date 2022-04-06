import { Args, Query, Resolver } from "type-graphql";
import { RecipiesArgs } from "./recipie.args";
import { Recipie } from "./recipie.type";

@Resolver(Recipie)
export class RecipieResolver {
    
    @Query(() => [Recipie])
    recipies(@Args() {skip, take}: RecipiesArgs): Recipie[] {
        return [{
            id: '1',
            title: 'Test',
            description: 'Some Test',
            creationDate: new Date(),
            ingredients: ['Hookers', 'Booze']
        }]
    }
}