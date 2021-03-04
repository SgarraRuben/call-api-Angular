import { People } from './../people';
import { GetApiService } from './../get-api.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  people: People;
  serviceInput: {
    'username'?: null,
    'password'?: null
  };
  
  constructor(private api: GetApiService) { 
    
  }

  ngOnInit(): void {
    this.serviceInput = {};
  }

  getById(num: number) {
    this.api.findById(num).subscribe((res: any) => {
      let response = res.body as People;
        this.people = response;

    });
  }
  login() {
    const params = {};
    params['username'] = this.serviceInput.username;
    params['password'] = this.serviceInput.password;
    this.api.loginOne(params).subscribe((res: string) => {
     let response=res;
     console.log(response);
      
    });
  }

  isEmpty(obj: any): boolean {
    return (obj == undefined || obj == null) 
  }

 
}


    


