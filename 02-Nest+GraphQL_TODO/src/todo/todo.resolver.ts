import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';
import { AggreationsType } from './types/aggregations.type';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
  @Query(() => [Todo], { name: 'todos' })
  findAll(@Args() statusArgs: StatusArgs) {
    return this.todoService.findAll(statusArgs);
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

  @Query(() => Int, { name: 'totalTodos' })
  totalTodos() {
    return this.todoService.totalTodos;
  }
  @Query(() => Int, { name: 'completedTodos' })
  completedTodos() {
    return this.todoService.completedTodos;
  }
  @Query(() => Int, { name: 'pendingTodos' })
  pendingTodos() {
    return this.todoService.pendingTodos;
  }

  @Query(() => AggreationsType)
  aggregations(): AggreationsType {
    return {
      total: this.todoService.totalTodos,
      pending: this.todoService.completedTodos,
      completed: this.todoService.pendingTodos,
    };
  }
}
