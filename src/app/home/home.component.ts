import { Component } from '@angular/core';
import { FurnService } from '../Services/furn/furn.service';
import { Furniture } from '../shared/models/Furniture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  furns:Furniture[] = [];
  constructor(private furnService:FurnService) {}

  ngOnInit(): void {
    this.furns = this.furnService.getAll();
  }
}
