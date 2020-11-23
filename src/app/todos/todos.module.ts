import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { FormsModule } from '@angular/forms';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodosContainerComponent } from './todos-container/todos-container.component';



@NgModule({
  declarations: [TodosListComponent, SingleTodoComponent, NewTodoComponent, TodosContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosContainerComponent
  ]
})
export class TodosModule { }
