import { Injectable } from '@angular/core';
import { Task } from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [
      /* { title: 'Write', description: 'I have to write', hide: true },
      { title: 'Feed', description: 'I must feed my dog', hide: true } */
    ];
  }

  getTask() {
    if (localStorage.getItem('Tasks') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('Tasks'));
      return this.tasks;
    }

  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    if (localStorage.getItem('Tasks') === null) {
      tasks.push(task);
      localStorage.setItem('Tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('Tasks'));
      tasks.push(task);
      localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task) {
    this.tasks.forEach((value, i) => {
      value == task ? this.tasks.splice(i, 1) && localStorage.setItem('Tasks', JSON.stringify(this.tasks)) : '';
    });
  }
}
