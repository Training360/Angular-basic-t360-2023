import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl: string ='https://www.googleapis.com/youtube/v3/search/';

  defaultParams: {part: string, maxResults: number, key: string} = {
    part: 'snippet',
    maxResults: 12,
    key: 'AIzaSyBf11FTLXiRVJTFKTCZnVLM2HL1KUQxyLI'
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Video[]> {
    const videosUrl = `${this.apiUrl}?q=angular&key=${this.defaultParams.key}
        &part=${this.defaultParams.part}
        &type=video
        &maxResults=${this.defaultParams.maxResults}`;
    return this.http.get<Video[]>(videosUrl)
      .pipe(
        map((response: any) => response.items)
      );
  }

}
