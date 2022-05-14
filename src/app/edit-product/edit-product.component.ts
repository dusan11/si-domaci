import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  brand = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    if (this.brand.hasError('required')&&this.name.hasError('required')&&this.price.hasError('required')&&this.description.hasError('required')) {
      return 'You must enter a value';
    }else{
      return Swal.fire({
        title: 'Error!',
        text: 'Form is ok, but you cant add new products to this list',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

  }
click(){
  return  Swal.fire({
    title: 'Error!',
    text: 'Form is ok, but you cant add new products to this list',
    icon: 'error',
    confirmButtonText: 'OK'
  })
}
 




}
