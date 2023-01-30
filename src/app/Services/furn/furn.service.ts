import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Furniture } from '../../shared/models/Furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnService {

  constructor() { }

 getAll():Furniture[]{
 return [
  {
    id:1,
    name:'Köşe Takımı',
    deliveryTime:'10-15 Gün',
    price:20000,
    favorite:false,
    origins:['Kayseri'],
    stars:4,
    imageUrl: '/projeMS/src/assets/images/Furns/a1.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  },
  {
    id:2,
    name:'Metal Ayaklı Köşe Takımı',
    deliveryTime:'10-15 Gün',
    price:25000,
    favorite:false,
    origins:['Kayseri'],
    stars:5,
    imageUrl: '/projeMS/src/assets/images/Furns/a2.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  },
  {
    id:3,
    name:'Sürgülü Gardrop',
    deliveryTime:'7-10 Gün',
    price:10000,
    favorite:false,
    origins:['İnegöl'],
    stars:3,
    imageUrl: '/projeMS/src/assets/images/Furns/a3.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  },
  {
    id:4,
    name:'Şal Desenli Salon Halısı',
    deliveryTime:'3 Gün',
    price:3000,
    favorite:false,
    origins:['Gaziantep'],
    stars:5,
    imageUrl: '/projeMS/src/assets/images/Furns/a5.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  },
  {
    id:5,
    name:'Avangart Koltuk Takımı',
    deliveryTime:'10 Gün',
    price:20000,
    favorite:false,
    origins:['İnegöl'],
    stars:3,
    imageUrl: '/projeMS/src/assets/images/Furns/a6.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  },
  {
    id:1,
    name:'Oturma Odası Takımı',
    deliveryTime:'10 Gün',
    price:20000,
    favorite:false,
    origins:['İnegöl'],
    stars:2,
    imageUrl: '/projeMS/src/assets/images/Furns/a7.jpg',
    tags: ['Koltuk','Oturma Odası','L Koltuk','Köşe Takımı'],
  }

 ]
 }
}
