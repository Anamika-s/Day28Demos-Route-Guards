import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path:'' , redirectTo: '/departments' , pathMatch:'full'},
{path:'departments' ,component: DepartmentsComponent},
{path:'departments/:id' ,component: DepartmentDetailComponent},

{path:'employees' , component: EmployeesComponent},
{path:"**" ,  component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentsComponent, EmployeesComponent, NotFoundComponent,DepartmentDetailComponent];
