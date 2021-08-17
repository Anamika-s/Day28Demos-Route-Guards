import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router ,ParamMap } from '@angular/router';
import { relative } from 'path';
@Component({
  selector: 'app-department-detail',
  template: `
    <div>
      You have selected {{deptid}}

      <div>
      <button (click)="Overview()"> OverView  </button>
      <button (click)="Contact()"> Contact </button>
      <router-outlet>    </router-outlet>
      </div>
      <h2>
      <a (click)="goPrevious()"> Previous </a>
      <a (click)="goNext()"> Next </a> 
      </h2>
     <div>
     <button (click)="GoBack()"> Back </button>
     </div>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router ) { }

  deptid : number;
  ngOnInit(): void {

   // let id =  parseInt(this.route.snapshot.paramMap.get("id"));
   this.route.paramMap.subscribe((params: ParamMap)=>
   {
     let id = parseInt(params.get("id"));
    this.deptid = id;
   });
  
  }

  goPrevious()
  {
  let previousId = this.deptid-1;
  this.router.navigate(['/departments', previousId]);
  }
  
  goNext()
  {
  let nextId = this.deptid+1;
  this.router.navigate(['/departments', nextId]);
  }
 Overview()
 {
   console.log("Overview");
   this.router.navigate(['overview'], {relativeTo: this.route});

 }
 Contact()
 {
   console.log("contact");
   this.router.navigate(['contact'], {relativeTo : this.route});

 }

 GoBack()
 {
   let selectedId = this.deptid ? this.deptid : null; 
   this.router.navigate(["/departments", {id : selectedId, test:'Hello'}]);
 }
}
