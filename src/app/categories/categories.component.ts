import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  classColor: string[] = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-secondary'];
  classAdd: string = 'btn-primary';

  constructor() { }

  ngOnInit(): void {
    
  }

  changeCategory(element:any){
    console.log(element);

  }

}
