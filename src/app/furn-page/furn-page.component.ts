import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnService } from '../Services/furn/furn.service';
import {Furniture} from '../shared/models/Furniture';

@Component({
  selector: 'app-furn-page',
  templateUrl: './furn-page.component.html',
  styleUrls: ['./furn-page.component.css']
})
export class FurnPageComponent implements OnInit{

  furn!: Furniture;
  constructor (private activatedRoute:ActivatedRoute, 
    private furnservice:FurnService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.furn = furnservice.getFurnitureById(params['id'])
    })
   }
  
  
  
  ngOnInit(): void {
    
  }

}
