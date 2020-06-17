import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobpart',
  templateUrl: './mobpart.component.html',
  styleUrls: ['./mobpart.component.css']
})
export class MobpartComponent  {

  title = "Hello There!!!";
  array = ["Pune", "Hyd", "Mumbai"];
  objects = [
    {
      idcolor: "red",
      pricecolor: "green",
      modelcolor: "blue",
      instockcolor: "orange",
    },
  ];
  object = [
    {
      id: 1,
      price: 1200,
      model: "Nokia",
      instock: 10,
      prodcolor: "orange",
      country: "Austrelia",
    },
    {
      id: 2,
      price: 100,
      model: "RedMI",
      instock: 5,
      prodcolor: "orange",
      country: "Japan",
    },
    {
      id: 3,
      price: 100,
      model: "Samsung",
      instock: 0,
      prodcolor: "orange",
      country: "India",
    },
    {
      id: 4,
      price: 5000,
      model: "Macromax",
      instock: 15,
      prodcolor: "orange",
      country: "China",
    },
  ];

  calProd() {
    let tot = 0;
    for (let mobPart of this.object) {
      tot = tot + mobPart.instock;
    }
    return tot;
  }
}
