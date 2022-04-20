import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";

const routes: Routes = [
  {path: '', component: CompanyComponent},
  {path: ':id', component: CompanyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
