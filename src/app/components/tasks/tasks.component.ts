import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
