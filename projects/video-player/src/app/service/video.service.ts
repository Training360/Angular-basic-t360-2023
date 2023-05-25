import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Video } from '../model/video';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseURL: string = 'https://www.googleapis.com/youtube/v3';

  defaultParams: {part: string, maxResults: number, key: string} = {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyBf11FTLXiRVJTFKTCZnVLM2HL1KUQxyLI',
  };

  http: HttpClient = inject(HttpClient);

  getVideos(query: string): Observable<Video[]> {
    const params = new HttpParams()
    .set('part', this.defaultParams.part)
    .set('maxResults', this.defaultParams.maxResults.toString())
    .set('key', this.defaultParams.key)
    .set('q', query);

  const url = `${this.baseURL}?${params.toString()}`;

  return this.http.get<Video[]>(url).pipe(
    map((response: any) => {
      return response.items;
    })
  );
  }
}
