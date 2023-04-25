import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Video } from '../model/video';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  key: string = 'AIzaSyCNYVz2WNwMqpivd2MuXi4bIlnnDUZhVXg';
  baseURL: string = 'https://www.googleapis.com/youtube/v3/search';

  http: HttpClient = inject(HttpClient);

  defaultParams: {part: string, maxResults: number, key: string, query: string} = {
    part: 'snippet',
    maxResults: 75,
    key: 'AIzaSyCNYVz2WNwMqpivd2MuXi4bIlnnDUZhVXg',
    query: 'angular'
  };

  getAll(): Observable<Video[]> {
    const params = new HttpParams()
    .set('part', this.defaultParams.part)
    .set('maxResults', this.defaultParams.maxResults.toString())
    .set('key', this.defaultParams.key)
    .set('q', this.defaultParams.query);

  const url = `${this.baseURL}?${params.toString()}`;

  return this.http.get<Video[]>(url)
    .pipe(
      map((response: any) => response.items)
    );
  }

}
