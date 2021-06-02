import { Injectable, EventEmitter } from '@angular/core';
import * as moment from 'moment';
moment.locale('es');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  month: moment.Moment = moment();

  
  get monthSelect() : moment.Moment {
    return this.month
  }
  
}
