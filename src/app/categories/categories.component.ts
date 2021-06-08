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
    this.loadLocalStorage();
  }

  saveLocalStorage(categories: string[]){
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  loadLocalStorage(){
    const categoriesString = localStorage.getItem('categories');
    (categoriesString) ? this.categories = JSON.parse(categoriesString) : false
  }

  addCategory(value: any, clascColor:string){

    const newCategory = {
      name: value,
      color: clascColor
    }
    
    const share = this.categories.some( element => element.name.toUpperCase() === value.toUpperCase() ); 

    if(value !== "" && !share){
      this.categories.push(newCategory);

      this.saveLocalStorage(this.categories);

    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La categoria ya existe o no es correcta',
      });
    }
    
    
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
    this.saveLocalStorage(this.categories);

    Swal.fire(
      'La categoria fue eliminada!',
      '',
      'success'
    )
  }
}
