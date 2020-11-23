import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted(e){
    console.log(e)
    this.todo.completed = e.target.checked
  }

}
