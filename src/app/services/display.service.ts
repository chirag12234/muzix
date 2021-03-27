import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private httpClient:HttpClient) { }
  apidata:any;
  fetchData(){
    let response= this.httpClient.get('http://api.napster.com/v2.2/playlists/top?apikey=ZWQ2YWY4OTctYjFiNy00NjM1LTg0MmMtYTdmNGE1MmZmMmE5')
    response.subscribe((data)=>this.apidata = data);
  }
}
