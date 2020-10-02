import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  gifs = new BehaviorSubject<any>([])


  constructor(private http:HttpClient) { }
  getTrendyGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=JFpy6YVgixapJLjWIcdGzYOrznT55EWj&limit=25&rating=g`)
    .subscribe((response: any)=> {
     this.gifs.next(response.data);
    });
  }

  searchGifs(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=jXgxtfwSwom2P18Po2BpFSjLguu2UTDf&limit=25&rating=g`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });;
  }
 getGifs(){
   return this.gifs.asObservable();
 }
 //getmore gifs button
 reloadGifs(){
   return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&tag=&rating=g')
   .subscribe((response:any)=>{
    this.gifs.next(response.data)
   });
 }
}