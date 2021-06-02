import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataService } from '../services/data.service';
moment.locale('es');

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

 
  date: moment.Moment = moment();
  months: moment.Moment[] = [];
  monthSelected: moment.Moment = moment();
  constructor( private dataService: DataService, 
               private router: Router) { }

  ngOnInit(): void {
    this.months = this.getMonths();

    /* this.dataService.month$.subscribe(month => {
      this.monthSelected = month;
      console.log('mes seleccionado', month);
    })
     */
  }

  getMonths(){
    
    let months = [];
    
    for (var i = 0; i <= 11; i++) {
      months.push(moment(this.date.month(i)));
      this.date.add(1, 'month');
      
     }
     
     return months;
  }

  openMonth(month: moment.Moment){
  this.dataService.month = month;
    this.router.navigateByUrl('/month');
  }
}
