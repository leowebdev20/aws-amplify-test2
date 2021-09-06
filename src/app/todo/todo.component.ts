import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  allTodos: any = [];

  constructor(private api: APIService) {}

  async ngOnInit() {
    let result = await this.api.ListTodos();
    this.allTodos = result.items;
  }

  async createTodo() {
    const newTodo = {
      name: 'Todo' + Math.floor(Math.random() * 100),
      body: 'Descrizione esempio',
      completed: false,
    };

    let result = await this.api.CreateTodo(newTodo);

    this.allTodos.push(result);
    // debugger;
  }

  async listTodos() {
    let result = await this.api.ListTodos();
    this.allTodos = result.items;  }
}
