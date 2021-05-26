import { Component, OnInit } from '@angular/core';
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

  openMes(idMes:string){
    console.log(idMes);
  }

}
