import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging'
})
export class PagingPipe implements PipeTransform {

  transform(value: any, pageNum: number, pageItems: number ): any {
    if (value && value.length > 0) {
      if(pageItems == 0)
        return value;
      var start = (pageNum - 1) * pageItems;
      var end = pageNum * pageItems;
      return value.filter((f: any) => f.index > start && f.index <= end)
    }
  }

}
