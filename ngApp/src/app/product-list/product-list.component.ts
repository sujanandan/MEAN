import { Component, OnInit } from '@angular/core';
import{EventService}from '../event.service';
import{ProductModel}from '../product-list/product.model';
import { from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {Router}from '@angular/router';
import{AuthService} from '../auth.service';
import{UpdateComponent}from '../update/update.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String="Product List";
  products:ProductModel[];
  productItem=new ProductModel(null,null,null,null,null,null,null,null);
  //property binding
  imageWidth:number=50;
  imageMargin:number=2;
  showaction:boolean=false;
  showImage:boolean=false;
  constructor(public _auth:AuthService,private eventService:EventService,private _router:Router) { }

  toggleImage():void{
    this.showImage=!this.showImage;
  }

  deleteP(pid)
  {
    // this.eventService.deleteProduct();
    console.log("deletion Called"+pid);
    alert("U are about to delete the record");
    this.eventService.deleteProduct(pid);
    this._router.navigate(['/product'])
     
  }
  ngOnInit(): void {
    this.eventService.getProducts().subscribe(
      res=>{
      this.products=JSON.parse(JSON.stringify(res));
    },
    err=>{
      if(err instanceof HttpErrorResponse){
      if(err.status===401){
        this._router.navigate(['/login'])
      }
    }}
    )
  }

}
