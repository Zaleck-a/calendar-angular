import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { MonthComponent } from './calendar/month.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'month', component: MonthComponent },
  { path: '**', pathMatch:'full', redirectTo: 'calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
