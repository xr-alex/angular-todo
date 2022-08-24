import { Component } from '@angular/core';
import * as uuid from 'uuid';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = TODO_LIST;
  constructor() { }
  
  onAddEvent(itemToAdd:string) {
    console.log("Added: "+itemToAdd);
    if (!itemToAdd) {
      return;
    }
    let newId = uuid.v4();
    let newTodo = new Todo(newId,itemToAdd);
    this.todoList.push(newTodo);
    console.log(this.todoList);
  }
}

const TODO_LIST :Todo[] = [
  {
    id: '1',
    name: 'Add a To-Do item.'
  },
  {
    id: '2',
    name: 'Remove a To-Do item.'
  }
];