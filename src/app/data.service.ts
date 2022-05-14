import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  data:any;
 // products:Product[];

  id:any;
  brand:any;
  name:any;
  description:any;
  price:any;
  image_link:any;


  getData() {
    this.data=this.httpClient.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');


    return this.httpClient.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  }

}




