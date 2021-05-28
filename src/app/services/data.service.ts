import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private meses = [
    {
      fila: "1",
      columna: [
        {
          id:"1",
          mes: "enero",
          dayFirst:"viernes",
          totalDays: "31"
        },
        {
          id:"2",
          mes: "febrero",
          dayFirst:"lunes",
          totalDays: "28"
        },
        {
          id:"3",
          mes: "marzo",
          dayFirst:"lunes",
          totalDays: "31"
        },
      ]
    },
    {
      fila: "2",
      columna: [
        {
          id:"4",
          mes: "abril",
          dayFirst:"jueves",
          totalDays: "30"
        },
        {
          id:"5",
          mes: "mayo",
          dayFirst:"sabado",
          totalDays: "31"
        },
        {
          id:"6",
          mes: "junio",
          dayFirst:"martes",
          totalDays: "30"
        },
      ]
    },
    {
      fila: "3",
      columna: [
        {
          id:"7",
          mes: "julio",
          dayFirst:"jueves",
          totalDays: "31"
        },
        {
          id:"8",
          mes: "agosto",
          dayFirst:"domingo",
          totalDays: "31"
        },
        {
          id:"9",
          mes: "septiembre",
          dayFirst:"miercoles",
          totalDays: "30"
        },
      ]
    },
    {
      fila: "4",
      columna: [
        {
          id:"10",
          mes: "octubre",
          dayFirst:"viernes",
          totalDays: "31"
        },
        {
          id:"11",
          mes: "noviembre",
          dayFirst:"lunes",
          totalDays: "30"
        },
        {
          id:"12",
          mes: "diciembre",
          dayFirst:"miercoles",
          totalDays: "31"
        },
      ]
    },
    
    
  ]

  getMes(){
    return this.meses.map( data => data.columna)
  }


  

}
