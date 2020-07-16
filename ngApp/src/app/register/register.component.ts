import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// registeredUser:any ={};


  constructor(private _auth:AuthService,private _router:Router) { }
  registeredUser=<any>{}
  // registeredUser={email:"",password:""};

  registerUser(){
    console.log("enter into registerUser sss"+this.registeredUser.email);
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      // res=>console.log(res),
      res=>{
        console.log(res)
        localStorage.setItem('token',res["token"]);
        this._router.navigate(['/login']);
      },
      err=>console.log(err)
    )
    // console.log(this.registeredUser);

  }

  ngOnInit(): void {
  }

}
