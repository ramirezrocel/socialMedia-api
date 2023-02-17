import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from '../../todo/entities/todo.entity';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  isAdmin: boolean;
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
