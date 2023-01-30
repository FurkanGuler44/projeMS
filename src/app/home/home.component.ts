import { Component, OnInit } from '@angular/core';
import { FurnService } from '../Services/furn/furn.service';
import { Furniture } from '../shared/models/Furniture';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  furns:Furniture[] = [];
  constructor(private furnService:FurnService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      if(params['searchTerm'])
      this.furns = this.furnService.getAll().filter(furn => furn.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      else
      this.furns = this.furnService.getAll();
    })

    
  }
}
