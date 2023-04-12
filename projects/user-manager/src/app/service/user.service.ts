import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3001/";
  urlFragment: string = 'users';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}${this.urlFragment}`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}${this.urlFragment}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(
      `${this.baseURL}${this.urlFragment}/${user.id}`,
      user,
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}${this.urlFragment}`, user);
  }

  remove(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseURL}${this.urlFragment}/${id}`);
  }


}
