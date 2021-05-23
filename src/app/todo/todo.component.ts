import {Component, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../interfaces/todo';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  sortAZ = false;
  sortZA = false;
  order = 'title';

  constructor(private todoService: TodoService, private orderPipe: OrderPipe) {
  }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  sortingAZ(): void {
    this.sortAZ = true;
    this.sortZA = false;
  }

  sortingZA(): void {
    this.sortAZ = false;
    this.sortZA = true;
  }
}
