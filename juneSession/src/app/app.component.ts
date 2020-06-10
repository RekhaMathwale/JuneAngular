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
  object = [
    {
      id: 1,
      price: 1200,
      model: 'nokia',
    },
    {
      id: 2,
      price: 100,
      model: 'Smsung',
    },
    {
      id: 2,
      price: 100,
      model: 'Smsung',
    },
    {
      id: 2,
      price: 100,
      model: 'Smsung',
    },
  ];
}
