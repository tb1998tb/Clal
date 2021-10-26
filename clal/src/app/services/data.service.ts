import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import jsonContents from '../../assets/json/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;
  chosenObject: Subject<any> = new Subject<any>();
  constructor() { }

  getEmployees() {
    return jsonContents.Employees;
  }

  getDepartmentsTree(tree: any = [], parentId:number = 0, index: number = 0) {
    var children = jsonContents.Departments.filter((f: any) => f.ParentID == parentId);
    if(children && children.length > 0){
      if(parentId == 0) {
        tree = children;
      }
      else {
        tree.subs = children;
      }
      index++;
      children.forEach((child: any) => {
        child.index = index;
        child.isCollapsed = index == 1;
        this.getDepartmentsTree(child, child.DepartmentID, index);
      });
    }
    return tree;
  }

  setObject(obj:any) {
    this.chosenObject.next(obj);
  }

  getEmployeeTasks(employee: any){
    var tasks:any = [];
    var index = 1;
    jsonContents.Tasks.forEach((task:any)=> {
      if (task.EmployeeID == employee.EmployeeID){
        task.index = index++;
        task.isPast = new Date(task.DueDate) < new Date();
        tasks.push(task)
      }
    });
    return tasks;
  }

  getDepartmentTasks(department: any){
    var tasks:any = [];
    var index = 1;
    jsonContents.Tasks.forEach((task:any)=> {
      if (task.DepartmentID == department.DepartmentID) {
        task.index = index++;
        task.isPast = new Date(task.DueDate) < new Date();
        tasks.push(task)
      }
    });
    return tasks;
  }
}
