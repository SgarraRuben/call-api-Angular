
import { GetApiService } from './get-api.service';
import { Component,OnInit } from '@angular/core';
import { People } from './people';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  people: People;
  peoples: People[];
  constructor(private api:GetApiService){


  }
  ngOnInit() {
    
    this.peoples=[];
      
  }
  
  getById(num:number) {
    
    this.api.findById(num)
      .subscribe((res) => {

        let response = res.body as People;
        this.people=response;
        

      });
  }

  
 




 
  
  
}
