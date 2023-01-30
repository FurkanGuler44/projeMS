import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Furniture } from 'src/app/shared/models/Furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnService {

  constructor() { }

 getAll():String[]{
  return [
    '/assets/images/Furns/a1.jpg',
    '/assets/images/Furns/a2.jpg',
    '/assets/images/Furns/a3.jpg',
    '/assets/images/Furns/a4.jpg',
    '/assets/images/Furns/a5.jpg',
    '/assets/images/Furns/a6.jpg',
    '/assets/images/Furns/a7.jpg',
  ]
 }
}
