import { Component } from '@angular/core';
import { FurnService } from '../Services/furn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  furns:String[] = [];
  constructor(private furnService:FurnService) {}

  ngOnInit(): void {
    this.furns = this.furnService.getAll();
  }
}
