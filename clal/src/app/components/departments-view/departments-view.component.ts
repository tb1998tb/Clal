import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'departments-view',
  templateUrl: './departments-view.component.html',
  styleUrls: ['./departments-view.component.scss']
})
export class DepartmentsViewComponent implements OnInit {

  departments: any[] = [];
  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.departments = this.dataService.getDepartmentsTree();
  }

}
