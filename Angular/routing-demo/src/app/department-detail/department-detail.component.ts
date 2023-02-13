import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {
  public departmentId : any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    let id = parseInt(this.route.snapshot.paramMap.get('id') as any);
    this.departmentId = id;
  }
}
