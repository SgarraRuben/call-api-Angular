import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) {}

  // getApi(){
  //   let random=Math.floor((Math.random()*61)+1);
  //   let apiString='https://swapi.dev/api/people/'+random;
  //   return this.http.get(apiString);
  // }
 
  findById(id:number): Observable<any> {
    let resp = this.http.get<any>('https://swapi.dev/api/people/'+id, { observe: 'response' });
    return resp;
  }
 
}
