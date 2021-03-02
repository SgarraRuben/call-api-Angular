import { People } from './../people';
import { GetApiService } from './../get-api.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  people: People;
  constructor(private api: GetApiService) { }

  ngOnInit(): void {
  }
  getById(num: number) {

    this.api.findById(num)
      .subscribe((res) => {

        let response = res.body as People;
        this.people = response;


      });
  }
}


    


