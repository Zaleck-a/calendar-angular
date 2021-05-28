import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date: number = 2020;

  data: any = {};
  mes: any = {};
  
  monthSelected: any = {};

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.year();
    this.getMes();
  }

  
  year() {
    return this.date = new Date().getFullYear();
  }


  getMes(){
    this.mes = this.dataService.getMes();
  }

  openMes(colum: any){
    this.monthSelected = colum;
  }

  MonthSelctedLess(id: any) {
    let currentMonth = Number(id) - 1
    if(currentMonth <= 0){
      return;
    }

    this.dataService.getMes().map(meses => {
      meses.forEach( mes => {
        
        if(mes.id === currentMonth.toString()){
          this.monthSelected = mes;
        }
        
      })
    });
  }

  MonthSelctedMore(id: any) {
    let currentMonth = Number(id) + 1

    if(currentMonth > 12){
      return;
    }

    this.dataService.getMes().map(meses => {
      meses.forEach( mes => {
        
        if(mes.id === currentMonth.toString()){
          this.monthSelected = mes;
        }
        
      })
    });

  }
}
