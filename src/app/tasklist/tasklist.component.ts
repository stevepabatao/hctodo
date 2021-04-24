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

  addTask(): void {
    this.apiService.addTask('Task from angular').subscribe((data) => {
      console.log(data);
    });
  }

  updateTask(): void {
    this.apiService.updateTask().subscribe((data) => {
      console.log(data);
    });
  }

  deleteTask(): void {
    this.apiService.deleteTask().subscribe((data) => {
      console.log(data);
    });
  }


}
