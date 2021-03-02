import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<any> {
    let resp = this.http.get<any>('https://swapi.dev/api/people/' + id, { observe: 'response' });
    return resp;
  }

}
