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
        },
        {
          id:"2",
          mes: "febrero",
        },
        {
          id:"3",
          mes: "marzo",
        },
      ]
    },
    {
      fila: "2",
      columna: [
        {
          id:"4",
          mes: "abril",
        },
        {
          id:"5",
          mes: "mayo",
        },
        {
          id:"6",
          mes: "junio",
        },
      ]
    },
    {
      fila: "3",
      columna: [
        {
          id:"7",
          mes: "julio",
        },
        {
          id:"8",
          mes: "agosto",
        },
        {
          id:"9",
          mes: "septiembre",
        },
      ]
    },
    {
      fila: "4",
      columna: [
        {
          id:"10",
          mes: "octubre",
        },
        {
          id:"11",
          mes: "noviembre",
        },
        {
          id:"12",
          mes: "diciembre",
        },
      ]
    },
    
    
  ]

  getMes(){
    return this.meses.map( data => data.columna)
  }
  

}
