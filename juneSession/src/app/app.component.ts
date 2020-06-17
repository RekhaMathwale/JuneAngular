import { Component } from '@angular/core';

@Component({
  // book
  selector: 'app-start',
  templateUrl: 'app.component.html', // view : UI
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  //this class is for storing components data
  title = 'Hello There!!!';
  array = ['Pune', 'Hyd', 'Mumbai'];
  objects = [
    {
      idcolor: 'red',
      pricecolor: 'green',
      modelcolor: 'blue',
      instockcolor: 'orange',
    },
  ];
  object = [
    {
      id: 1,
      price: 1200,
      model: 'Nokia',
      instock: 10,
      prodcolor: 'orange',
      country: 'Austrelia',
    },
    {
      id: 2,
      price: 100,
      model: 'RedMI',
      instock: 5,
      prodcolor: 'orange',
      country: 'Japan',
    },
    {
      id: 3,
      price: 100,
      model: 'Samsung',
      instock: 0,
      prodcolor: 'orange',
      country: 'India',
    },
    {
      id: 4,
      price: 5000,
      model: 'Macromax',
      instock: 15,
      prodcolor: 'orange',
      country: 'China',
    },
  ];
}
