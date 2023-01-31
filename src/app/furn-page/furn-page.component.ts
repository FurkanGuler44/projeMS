import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Services/cart/cart.service';
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
    private furnService: FurnService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.furn = furnService.getFurnitureById(params['id'])
    })
   }
  
  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.furn); 
    this.router.navigateByUrl('/cart-page');
  }

}
