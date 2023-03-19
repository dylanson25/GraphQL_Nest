import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(@Args('createToDoInput') createTodoInput: CreateTodoInput): Todo {
    return this.todoService.createTodo(createTodoInput.description);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(@Args('UpdateToDoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => Boolean)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
