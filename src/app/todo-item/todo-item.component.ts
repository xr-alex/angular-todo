import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteEE = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(){
    this.deleteEE.emit(this.todo);
  }

}
