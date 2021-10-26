import { Component, OnInit, Input  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent implements OnInit {

  employees: any[] = [];
  search: string = "";
  opened:boolean = true;
  constructor(private dataService: DataService) {
  }

 ngOnInit(): void {
   this.employees = this.dataService.getEmployees();
 }

}
