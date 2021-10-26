import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: any = {};
  chosen:boolean = false;
  constructor(private dataService: DataService) { 
    dataService.chosenObject.subscribe({
      next: (obj) => { this.chosen = obj && obj.object.EmployeeID == this.employee.EmployeeID }
    });
  }

  ngOnInit(): void {
  }

  chooseEmployee() {
    this.dataService.setObject({type:'employee',object:this.employee});
  }

}
