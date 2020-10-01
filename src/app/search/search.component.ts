
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private dataService: ServiceService) { }

  ngOnInit(): void {
  }

  search(findTerm: string){
    if (findTerm !== ''){
      this.dataService.searchGifs(findTerm)
     
    }
  }

}