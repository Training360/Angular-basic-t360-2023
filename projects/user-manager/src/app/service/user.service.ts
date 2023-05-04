import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3001/";
  urlFragment: string = 'users';

  http: HttpClient = inject(HttpClient);

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

  remove(user: User): Observable<User> {
    return this.http.delete<User>(`${this.baseURL}${this.urlFragment}/${user.id}`);
  }

  // Reactive form
  add(user: User): Promise<any> {
    return new Promise( ( resolve: any, reject: any ): void => {
      if (!user.id) {
        this.getAll().forEach( users => {
          let id = users[users.length - 1].id;
          this.http.post<Observable<any>>(`${this.baseURL}${this.urlFragment}`, user)
            .forEach( res => {
              resolve();
            });
          });
        } else {
          this.http.post<Observable<any>>(`${this.baseURL}${this.urlFragment}`, user)
            .forEach( res => {
              resolve();
            });
          }
        });
      }

}
