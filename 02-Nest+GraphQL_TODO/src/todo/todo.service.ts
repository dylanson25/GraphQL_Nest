import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: '  Task 1', done: false },
    { id: 2, description: '  Task 2', done: false },
    { id: 3, description: '  Task 3', done: false },
  ];

  get totalTodos() {
    return this.todos.length;
  }
  get completedTodos() {
    return this.todos.filter((todo) => todo.done === true).length;
  }
  get pendingTodos() {
    return this.todos.filter((todo) => todo.done === false).length;
  }

  findAll({ status }: StatusArgs) {
    if (status === undefined) return this.todos;
    return this.todos.filter((todo) => todo.done === status);
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`todo with id ${id} not found`);
    return todo;
  }

  createTodo(description: string): Todo {
    const todo = new Todo();
    todo.description = description;
    todo.id = Math.max(...this.todos.map((todo) => todo.id)) + 1;
    this.todos.push(todo);
    return todo;
  }
  update(updateTodoInput: UpdateTodoInput): Todo {
    const { id, description, done } = updateTodoInput;
    const todo = this.findOne(id);
    if (!!description) todo.description = description;
    if (done != undefined) todo.done = done;
    this.todos = this.todos.map((todoItem) => {
      if (todoItem.id === id) return todo;
      return todoItem;
    });

    return todo;
  }
  remove(id: number) {
    this.findOne(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return true;
  }
}
