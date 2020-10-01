import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  
  gifs:any [] = [];
  subscription: Subscription

  constructor(private dataService: ServiceService) { }

  ngOnInit(): void {
    this.dataService.getTrendyGifs()
    this.dataService.reloadGifs()
    this.subscription=this.dataService.getGifs()
    .subscribe((response: any)=>{
      this.gifs = response;
    })
  }

 reload(){
   this.dataService.reloadGifs()
 }

 ngOnDestroy(){
 this.subscription.unsubscribe();
 }
}

