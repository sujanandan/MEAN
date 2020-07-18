import { Component, OnInit } from '@angular/core';

import{EventService}from '../event.service';
import { ProductModel } from '../product-list/product.model';
import {AuthGuard}from '../auth.guard';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  title:string = "Edit Product";

//   public updateProduct: ProductModel;

  constructor(private productService:EventService,private actRoute: ActivatedRoute,private router:Router) { }
  // productItem=new ProductModel(null,null,null,null,null,null,null,null)
  updateProduct=new ProductModel(null,null,null,null,null,null,null,null)
  // products:ProductModel;
  ngOnInit(): void {
    console.log("inside update");
    
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.show(id);
  }
  show(id){
    this.productService.showProduct(id)
    .subscribe((data)=>{
     this.updateProduct=JSON.parse(JSON.stringify(data))
  })
  }

  editProducts()
  {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log('called product with id :'+ id);

    if (window.confirm('Are you sure?')) {
    this.productService.editProduct(id,this.updateProduct)
    .subscribe((data)=>{
    this.router.navigate(['/']);
    console.log('Content updated successfully!' + data);
    alert('Product Updated successfully!!');

    }),(err)=>{console.log(err)}
  }
}
}
