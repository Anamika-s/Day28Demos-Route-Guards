import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckGuard } from './guards/check.guard';
import { ChildAuthGuard } from './guards/child-auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
 
const routes: Routes = [
{path:'' , redirectTo: '/departments' , pathMatch:'full'},
{path:'departments' ,component: DepartmentsComponent,canActivate : [AuthGuard] },

{path:'departments/:id' ,component: DepartmentDetailComponent,
canActivateChild: [ChildAuthGuard]
,children:
[
{path:'overview', component:DepartmentOverviewComponent },
{path:'contact', component: DepartmentContactComponent}
]
},
 
{path:'employees' , component: EmployeesComponent, 
canActivate : [AuthGuard] , data:['manager', 'admin']
},
{path:'test' , component: TestComponent , canDeactivate:[CheckGuard]
},
{path:'login' , component: LoginComponent},

{path:"**" ,  component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentsComponent, 
  EmployeesComponent, NotFoundComponent,
  DepartmentDetailComponent,DepartmentOverviewComponent
,DepartmentContactComponent, TestComponent];
