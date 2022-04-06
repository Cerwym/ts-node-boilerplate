import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Recipie {
    @Field(type => ID)
    id: String;

    @Field()
    title: string;

    @Field({ nullable: true})
    description?: string;

    @Field()
    creationDate: Date;

    @Field(type => [String])
    ingredients: string[]
}