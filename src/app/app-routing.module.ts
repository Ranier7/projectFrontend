import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'company', component: CompanyListComponent},
  {path: '', redirectTo: 'company', pathMatch: 'full'},
  {path: 'create-company', component: CreateCompanyComponent},
  {path: 'update-company/:id', component: UpdateCompanyComponent},
  {path: 'company-details/:id', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
