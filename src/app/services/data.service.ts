import { Injectable, EventEmitter } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  month: moment.Moment = moment();

  categories: any[] = [
    {
      name: 'Trabajo',
      color: 'btn-primary'
    },
    {
      name: 'Vacaciones',
      color: 'btn-success'
    }
  ];

  categorySelected: any = '';
  
  get monthSelect() : moment.Moment {
    return this.month
  }
  
}
