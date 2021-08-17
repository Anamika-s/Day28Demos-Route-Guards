import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { routingComponents } from '../app-routing.module';
@Component({
  selector: 'app-departments',
  template: `
    <div>
    <ul>
    <li (click)="Select(department)" *ngFor="let department of departments">
     <span> {{department.id}} </span> {{department.name}} </li>
    </ul>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentsComponent implements OnInit {
  departments =[
    { id :1 , name: 'Angular'},
    { id :2 , name: 'C#'},
    { id :3 , name: 'MVC'},
    { id :4 , name: 'C++'},
    { id :5 , name: 'Java'}
  ];
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  Select(department)
  {
  this._router.navigate(['/departments' , department.id]);
  }
}
