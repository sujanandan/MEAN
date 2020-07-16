import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{EventService}from '../event.service';
import { ProductModel } from '../product-list/product.model';
import {AuthGuard}from '../auth.guard';
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  title:String="Add Product";

  constructor(private productService:EventService,private router:Router) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null)

  
  AddProduct()
  {
    this.productService.newProduct(this.productItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/product']);
  }
  ngOnInit(): void {}

}
