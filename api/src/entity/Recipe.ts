import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { User } from "./User";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // @ManyToMany(() => Ingredient)
  // @JoinTable()
  // ingredients: Ingredient[];

  // @ManyToOne(() => User, (user) => user.recipes)
  // author: User;
}
