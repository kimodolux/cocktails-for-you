import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column("text", { array: true })
  // @OneToMany(() => Recipe, (recipe) => recipe.author)
  // recipes: Recipe;
}
