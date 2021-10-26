import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';
import { DepartmentsViewComponent} from './components/departments-view/departments-view.component';
import { DataService } from './services/data.service';
import { FilterEmployeePipe } from './pipes/filter-employee.pipe';
import { PagingPipe } from './pipes/paging.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    TasksViewComponent,
    EmployeesViewComponent,
    DepartmentsViewComponent,
    FilterEmployeePipe,
    PagingPipe,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
