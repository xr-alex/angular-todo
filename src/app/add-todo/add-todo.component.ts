import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm : FormGroup;
  @Output() add = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
       description: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  onAddClick(){
    if(this.todoForm.value['description']){
      this.add.emit(this.todoForm.value['description']);
      this.todoForm.reset();
    }
    else{
      this.todoForm.markAllAsTouched();
    }
  }

}
