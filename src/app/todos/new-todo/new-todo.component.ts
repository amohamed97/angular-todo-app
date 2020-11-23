import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  newTodoValue:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(e){
    console.log(`ADDED ${this.newTodoValue}`)
  }

}
