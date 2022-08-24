import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList:Todo[];

  constructor() { }

  ngOnInit() {
  }

  onDeleteEvent(itemToDelete:Todo){
    let index = this.todoList.findIndex((todo)=> todo.id === itemToDelete.id);
    this.todoList.splice(index,1);
  }

}
