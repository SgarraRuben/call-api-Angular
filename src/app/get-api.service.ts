import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  headers: any;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
      // .append('Access-Control-Allow-Header', '*')
      // .append('Access-Control-Allow-Origin', '*')
      // .append('Content-Type', 'text/plain');
  }

  findById(id: number): Observable<any> {
    let resp = this.http.get<any>('https://swapi.dev/api/people/' + id, { observe: 'response' });
    return resp;
  }

  loginOne(input: any): Observable<string> {
    const params = new HttpParams()
      .set('username', input.username)
      .set('password', input.password);
    return this.http.post<string>('http://localhost:8080/api/login-user/login', {}, {params: params, headers: this.headers});
  }

  loginTwo(params: any): Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/login-user/login', {},
      {params: {fromObject: params}, headers: this.headers});
  }

}
