import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

 
  monthSelected: any = {};
  date: moment.Moment = moment();

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    
  }



  openMes(colum: any){
    this.monthSelected = colum;
  }

}
