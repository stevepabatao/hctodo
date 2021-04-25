import { Component, OnInit, Output } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TasklistComponent implements OnInit {

  tasks;
  token;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTask().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    });
  }

  addTask(task): void {
    this.apiService.addTask(task).subscribe((data) => {
      alert(task);
      console.log(data);
    });
  }

  updateTask(id): void {
    this.apiService.updateTask(id).subscribe((data) => {
      console.log(data);
    });
  }

  deleteTask(id): void {
    this.apiService.deleteTask(id).subscribe((data) => {
      console.log(data);
    });
  }


}
