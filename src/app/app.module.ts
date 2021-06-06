import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MonthComponent } from './calendar/month.component';
import { LetterPipe } from './pipes/letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CategoriesComponent,
    MonthComponent,
    LetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
