import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styles: [
  ]
})
export class MonthComponent implements OnInit {

  days: string[] = [];
  @Input() item: any = {};
  btnStyleLeft: boolean = false;
  btnStyleRigth: boolean = false;
  @Output() changeMonthLess = new EventEmitter<string>();
  @Output() changeMonthMore = new EventEmitter<string>();

  meses: string = moment().calendar();

  constructor() { }

  ngOnInit(): void {
    this.days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    console.log(this.meses);
  }

  lessMonth(value: any) {
    (value <= 2) ? this.btnStyleLeft = true : false;
    (value >= 11) ? this.btnStyleRigth = false : false;
    this.changeMonthLess.emit(value);
    
  }

  moreMonth(value: any) {
    (value <= 2) ? this.btnStyleLeft = false : false;
    (value >= 11) ? this.btnStyleRigth = true : false;
    this.changeMonthMore.emit(value);
  }

}
