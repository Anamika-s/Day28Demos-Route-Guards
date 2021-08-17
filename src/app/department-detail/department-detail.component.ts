import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You have selected {{deptid}}
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute ) { }

  deptid : number;
  ngOnInit(): void {

    let id =  parseInt(this.route.snapshot.paramMap.get("id"));
  this.deptid = id;
  }

}
