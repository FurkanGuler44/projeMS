import { Furniture } from './Furniture';

export class CartItem {
  constructor(furn: Furniture) {
    this.furn = furn;
  }
  furn: Furniture;
  quantity: number = 1;

  get price(): number {
    return this.furn.price * this.quantity;
  }
}
