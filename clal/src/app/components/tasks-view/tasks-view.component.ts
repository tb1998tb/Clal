import { Component, OnInit, ViewChild,AfterContentChecked } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit,AfterContentChecked {
  tasks: any;
  pageNum: number;
  pageItems:number;
  @ViewChild('paginator') paginator:any;
  objectTypeChosen: string;
  constructor(private dataService: DataService, private cdRef:ChangeDetectorRef) { 
    dataService.chosenObject.subscribe({
      next: (obj) => { this.getObjectTasks(obj) }
    });
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
 } 

  getObjectTasks(obj:any) {
    this.objectTypeChosen = obj.type;
    if(obj.type == 'employee'){
      this.tasks = this.dataService.getEmployeeTasks(obj.object);
    }
    else {
      this.tasks = this.dataService.getDepartmentTasks(obj.object);
    }
  }

  setPaging(ev:string) {
    this.cdRef.detectChanges();
    var data = JSON.parse(ev);
    this.pageNum = data.pageNum;
    this.pageItems = data.pageItems;
  }
}
