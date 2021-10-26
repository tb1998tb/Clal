import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  @Input() department: any = {};
  private collapsedSubs: boolean = false;
  chosen:boolean = false;
  constructor(private dataService: DataService) { 
    dataService.chosenObject.subscribe({
      next: (obj) => { this.chosen = obj && obj.object.DepartmentID == this.department.DepartmentID }
    });
  }

  ngOnInit(): void {
  }
  
  collapseSubs(){
    this.collapsedSubs = !this.collapsedSubs;
    this.department.subs && this.department.subs.forEach((sub: any) => {
      sub.isCollapsed = this.collapsedSubs;
    });
  }
  chooseDepartment() {
    this.dataService.setObject({type: 'department', object: this.department});
  }

}
