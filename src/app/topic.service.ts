import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TopicService {

  constructor(private http:HttpClient) { }

  getTopics(pattern):Observable<object>{
   return this.http.get("http://139.59.9.236:8899/rest-api/topics/"+pattern);
  }

}
