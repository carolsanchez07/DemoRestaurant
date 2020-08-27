import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu:any = [

   
    {
      titulo:'Comida',
      food:[
        {name: 'Pizza Margarita', price: '10', description: 'Queso Mozzarella y Tomate'},
        {name: 'Ensalada Cesar con pollo', price: '15', description: 'Pollo, tocineta, trozos de pan'},
        {name: 'Medallón de Solomillo horneado', price: '20', description: 'Con papas fritas y pimentones asados'},
        {name: 'Pasta Carbonara', price: '15', description: 'Tocineta, crema de leche y huevo'}
      ],
      
      drink:[
        {name: 'Refresco', price: '1.5', description: 'Pepsi, Coca Cola'},
        {name: 'Agua', price: '1', description: 'Agua Mineral'},
        {name: 'Jugos Naturales', price: '3', description: 'Fresa, Piña, Parchita'},
        {name: 'Café', price: '2', description: ' - '}
      ]
    
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.menu[0].food);
    
  }

}
