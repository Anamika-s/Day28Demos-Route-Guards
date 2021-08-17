import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import { routingComponents } from '../app-routing.module';
@Component({
  selector: 'app-departments',
  template: `
    <div>
    <ul>
    <li (click)="Select(department)"  [class.selected]="onSelected(department)"  *ngFor="let department of departments">
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
  constructor(private _router : Router , private route : ActivatedRoute) { }

   selectedId : number;
  ngOnInit(): void {

    // let id =  parseInt(this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      let id = parseInt(params.get("id"));
     this.selectedId = id;
     console.log(id);
    });
   
   }
  Select(department)
  {
  //this._router.navigate(['/departments' , department.id]);
  this._router.navigate([department.id], {relativeTo:this.route});
  }

  onSelected(department)
  {
 return department.id === this.selectedId;
  }
}
