import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Furniture } from 'src/app/shared/models/Furniture';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(furn:Furniture):void{
    let cartItem = this.cart.items.find(item => item.furn.id === furn.id);
    if(cartItem){
      this.changeQuantity(furn.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(furn))
  }

  removeFromCart(FurnId:number):void{
    this.cart.items = 
    this.cart.items.filter(item => item.furn.id != FurnId);
  }

  changeQuantity(FurnId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.furn.id === FurnId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
