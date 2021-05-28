import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  }

  lessMonth(value: any) {
    (value <= 2) ? this.btnStyleLeft = true : false;
    (value >= 12) ? this.btnStyleRigth = false : false;
    this.changeMonthLess.emit(value);
    
  }

  moreMonth(value: any) {
    (value <= 2) ? this.btnStyleLeft = false : false;
    (value >= 12) ? this.btnStyleRigth = true : false;
    this.changeMonthMore.emit(value);
  }

}
