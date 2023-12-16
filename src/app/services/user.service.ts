import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private reloadUsersSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadUsers$: Observable<boolean> = this.reloadUsersSubject.asObservable();

  getUsers(): Observable<User[]>{
    let url = 'https://localhost:7136/api/User';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id: number) : Observable<User>{
    let url = 'https://localhost:7136/api/User' + id;
    return this.httpClient.get<User>(url);
  }

 
  addUser(user: User) :Observable<number> {
    let url = 'https://localhost:7136/api/User';
    return this.httpClient.post<number>(url, user)
  }

  setReloadUser(){
    let flag = this.reloadUsersSubject.value;
    this.reloadUsersSubject.next(!flag);
  }
}
