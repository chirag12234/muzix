import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  apidata:any=[];
  
  ngOnInit(): void {
    let response= this.httpClient.get<any>('http://api.napster.com/v2.2/playlists/top?apikey=ZWQ2YWY4OTctYjFiNy00NjM1LTg0MmMtYTdmNGE1MmZmMmE5')
    response.subscribe((data)=>{ 
      this.apidata = data.playlists
    },error=>{
      console.log(error)
      
    }
    )
    
    
   
  }

  }


