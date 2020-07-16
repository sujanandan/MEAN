import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import{AuthService} from './auth.service';
import{EventService} from './event.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import{AuthGuard}from './auth.guard';
import{TokenInterceptorService}from './token-interceptor.service';
import { from } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    NewproductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,EventService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService, //modified token
    multi:true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
