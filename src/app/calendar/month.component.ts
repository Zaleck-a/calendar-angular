import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../services/data.service';

moment.locale('es');

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styles: [
  ]
})
export class MonthComponent implements OnInit {

  days: string[] = [];
  btnStyleLeft: boolean = false;
  btnStyleRigth: boolean = false;

  cells: any[] = [];
  currentMonth: moment.Moment = moment();

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    this.currentMonth = this.dataService.monthSelect;
    this.showCells();
    this.validatebtnDisabled();
  }

  lessMonth(monthSelected: moment.Moment) {
    
    this.currentMonth = monthSelected.subtract(1, 'month');
    this.showCells();
    this.validatebtnDisabled();
  }

  moreMonth(monthSelected: moment.Moment) {
    this.currentMonth = monthSelected.add(1, 'month');
    this.showCells();
    this.validatebtnDisabled();
  }

  validatebtnDisabled(){
    (this.currentMonth.month() === 0 ) ? this.btnStyleLeft = true : false;
    (this.currentMonth.month() === 10 ) ? this.btnStyleRigth = false : false;
    (this.currentMonth.month() === 11 ) ? this.btnStyleRigth = true : false;
    (this.currentMonth.month() === 1 ) ? this.btnStyleLeft = false : false;
  }

  showCells(){
    this.cells = this.generateDates(this.currentMonth);
  }

  generateDates(monthToShow: moment.Moment = moment()){
    
    let dateStart = moment(monthToShow).startOf('month');
    let dateEnd = moment(monthToShow).endOf('month');

    let cells = [];

    while(dateStart.day() !== 1){
      dateStart.subtract( 1, 'days' );
    }

    while(dateEnd.day() !== 0){
      dateEnd.add( 1, 'days' );
    }

    const monthCells = localStorage.getItem(this.currentMonth.month().toString());
    let cellsPase = [];
    (monthCells) ? cellsPase = JSON.parse(monthCells) : false;
    
    let i = 0;
    do {
      
      cells.push({
        date: moment(dateStart),
        isIntCurrentMonth: dateStart.month() === monthToShow.month(),
        categories: []
      })

      if(monthCells){
      cells[i].categories = cellsPase[i].categories;
      }
      
      i++;
      dateStart.add(1, 'days');
    } while (dateStart.isSameOrBefore(dateEnd));

    return cells;
  }

  addCategory(index:number){
    const category = this.dataService.categorySelected;
    if(category === '' || this.cells[index].categories.indexOf(category) !== -1 ){return;}
    this.cells[index].categories.push(category);

    localStorage.setItem( this.currentMonth.month().toString(), JSON.stringify(this.cells));
  }

  deleteCategory(index: number, category: any){
    const deleteToCategory = this.cells[index].categories.find((element: any) => element.name === category.name);
    const indice = this.cells[index].categories.indexOf(deleteToCategory);
    this.cells[index].categories.splice(indice, 1);

    localStorage.setItem( this.currentMonth.month().toString(), JSON.stringify(this.cells));
  }

  prevent(e:any){
    e.stopPropagation();//evita el primer click
  }
}
