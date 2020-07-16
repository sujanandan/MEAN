import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewproductComponent} from './newproduct/newproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AuthGuard}from './auth.guard';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'',redirectTo:'/product',pathMatch:'full'},
{path:'product',component:ProductListComponent},
{path:'update/:id',component:UpdateComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'add',component:NewproductComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
