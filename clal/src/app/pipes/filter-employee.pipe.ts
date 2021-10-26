import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {

  transform(value: any[], search: string): any {
    if(!value || value.length == 0 || !search || search == '')
      return value;
    return value.filter(f => f.EmployeeName.toLowerCase().indexOf(search.toLowerCase()) >= 0);
  }

}
