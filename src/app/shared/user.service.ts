import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
    users: User[];
    readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  postUser(use: User) {
    return this.http.post(this.baseURL, use);
  }
  getUserList() {
    return this.http.get(this.baseURL);
  }
  putUser(use: User) {
    console.log(use._id);
    return this.http.put(this.baseURL + `/${use._id}`, use);
  }
  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
