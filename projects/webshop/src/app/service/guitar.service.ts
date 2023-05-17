import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Guitar } from '../model/guitar';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  usersURL: string = 'http://localhost:3002/guitars';

  http: HttpClient = inject(HttpClient);

  getAll(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this.usersURL);
  }
}
