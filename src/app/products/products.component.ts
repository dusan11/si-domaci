import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Product } from 'src/app/product';
import { DataService } from 'src/app/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  dataSource:any;
  
  displayedColumns: string[] = ['position', 'brand', 'name', 'price', 'description', 'image_link', 'edit'];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData() {
    this.dataService.getData().subscribe(res=>{
      this.products=res;
      this.dataSource = this.products;
      
    })
  }

  info(){
      Swal.fire({
        title: 'Error!',
        text: 'You cant edit or delete products',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    
  }




  







}
