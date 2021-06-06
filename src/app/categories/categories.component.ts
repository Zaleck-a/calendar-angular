import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2'

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

  addCategory(value: any, clascColor:string){
    (value === "") ? false :

    this.categories.push({
      name: value,
      color: clascColor
    });
    
  }

  categorySelected(category: any){
    this.dataService.categorySelected = category;
  }

  deleteCategory(category: any){

     Swal.fire({
      title: `Estas seguro de eliminar ${category.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
  
        this.shareElementAndDelete(category.name);

      }
    })
  }

  shareElementAndDelete(name: string){
    //validates if the category name is the default category
    if(name === 'Vacaciones' || name === 'Trabajo'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Categoria predeterminada!',
      })
      return;
    }
    
    const copyCategories = this.categories;
    const categoryDelete = copyCategories.find( element => element.name == name );
    const index = copyCategories.indexOf(categoryDelete);
    copyCategories.splice(index, 1);
    this.categories = copyCategories;

    Swal.fire(
      'La categoria fue eliminada!',
      '',
      'success'
    )
  }
}
