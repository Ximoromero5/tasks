import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(taskTitle: HTMLInputElement, taskDescription: HTMLInputElement) {
    console.log(taskTitle.value, taskDescription.value);
    this.taskService.addTask({
      title: taskTitle.value,
      description: taskDescription.value,
      hide: true
    });

    taskTitle.value = '';
    taskDescription.value = '';
    taskTitle.focus();

    return false;
  }
}
