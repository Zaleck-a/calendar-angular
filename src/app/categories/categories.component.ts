import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  classColor: string[] = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-secondary'];
  classAdd: string = 'btn-primary';
  
  categories: any[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.categories = this.dataService.categories
  }

  changeCategory(element:any){
    console.log(element);

  }

  addCategory(value: any, clascColor:string){
    if(value === ""){return;}

    this.categories.push({
      name: value,
      color: clascColor
    });
    
  }
}
