import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient){ }
  getProducts(){
    return this.http.get("http://localhost:3000/api/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/api/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  deleteProduct(id){
    console.log(id);
    return this.http.post("http://localhost:3000/api/delete",{"item":id})
    .subscribe(data=>{console.log(data)})
  }
  showProduct(id:any){
    // let url=`${this.baseUri}/edit/${id}`
    return this.http.get(`http://localhost:3000/api/edit/${id}`)
    // .subscribe((data)=>{console.log(data)})
  }
  editProduct(id:any,item){
    // let url=`${this.baseUri}/update/${id}`
    return this.http.post(`http://localhost:3000/api/update/${id}`,item)
    // .subscribe((data)=>{console.log(data)})
  }
}
