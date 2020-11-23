import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todosList: any = []
  constructor() {
  }

  ngOnInit(): void {
    this.todosList = [{id: 1, text: 'First Todo', completed: false}, {id: 2, text: 'Second Todo', completed: true}]
  }

}
