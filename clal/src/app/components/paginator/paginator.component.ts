import { Component, EventEmitter, Input, OnInit, Output, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() items:any[] = [];
  @Output() setPaging = new EventEmitter();
  pageNum:number;
  pageItems:number;
  pageItemsOptions:any = [];
  pageNumOptions:any = [];
  
  constructor() {
    this.pageItemsOptions = [10,20,50,100,0];
   }

  ngOnInit(): void {
    this.pageNum = 1;
    this.pageItems = 10;
    this.setPagingEvent();
  }

  ngOnChanges(changes:any) {
    if(changes && changes.items.currentValue != changes.items.previousValue)
    {
      this.pageNum = 1;
      this.setPageNumOptions();
      this.setPagingEvent();
    }
  }

  setPageNumOptions() {
    if(this.pageItems == 0 || this.items.length < this.pageItems){
      this.pageNumOptions = [];
      return;
    }
    this.pageNumOptions = [];
    var end = this.items.length % this.pageItems > 0 ? (this.items.length / this.pageItems + 1) : (this.items.length / this.pageItems);
    for(var i = 1; i <= end; i++) {
      this.pageNumOptions.push(i);
    }
  }

  setPagingEvent() {
    this.setPaging.emit(JSON.stringify({pageNum: this.pageNum, pageItems: this.pageItems }));
  }

  setPageItemsValue(val:number) {
    this.pageItems = val;
    this.pageNum = 1;
    this.setPagingEvent();
    this.setPageNumOptions();
  }

  setPageNumValue(num:number) {
    this.pageNum = num;
    this.setPagingEvent();
  }

  navigatePage(direction:number) {
    if(this.enableNavigate(direction)){
      this.pageNum+= direction;
      this.setPagingEvent();
    }
  }

  enableNavigate(direction:number){
    return this.pageNumOptions.includes(this.pageNum + direction);
  }

}
