import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user = {
    login: 'admin',
    password: 'admin'
  }

  token;
  tokenChange = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {}

  public auth() {
    this.httpClient.post('http://localhost/wp-playground/wp-json/jwt-auth/v1/token', {
      username: this.user.login,
      password: this.user.password
    }).subscribe((data) => {
      if(data['token']) {
        this.token = data['token'];
        this.tokenChange.emit(this.token);
      }
    });
    return this.token;
  } 

  public getTask() {
    return this.httpClient.get('http://localhost/wp-playground/wp-json/wp/v2/tz_todo');
  }

  public addTask(data: any) {
    this.token = this.auth();
    console.log(this.token);
   const headers = {
    headers: new HttpHeaders({
      'Authorization': this.token,
      'data': data
    })
   }

    return this.httpClient.post<any>('http://localhost/wp-playground/wp-json/wp/v2/tz_todo/', headers);
  }

  public updateTask(data: any) {
    this.token = this.auth();
    console.log(this.token);
   const headers = {
    headers: new HttpHeaders({
      'Authorization': this.token,
      'data': data
    })
   }

    return this.httpClient.post<any>('http://localhost/wp-playground/wp-json/wp/v2/tz_todo/check/'+ data + ')', headers);
  }

  public deleteTask(data: any) {
    this.token = this.auth();
    console.log(this.token);
   const headers = {
    headers: new HttpHeaders({
      'Authorization': this.token,
      'data': data
    })
   }

    return this.httpClient.post<any>('http://localhost/wp-playground/wp-json/wp/v2/tz_todo/delete/' + data +  ')', headers);
  }

};