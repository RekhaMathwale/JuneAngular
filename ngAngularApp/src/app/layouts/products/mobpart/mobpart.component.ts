import { Component, OnInit } from "@angular/core";
import { Mobobject } from "./mobpart";
import { MOBPART } from "./mockdata";
@Component({
  selector: "app-mobpart",
  templateUrl: "./mobpart.component.html",
  styleUrls: ["./mobpart.component.css"],
})
export class MobpartComponent {
  title = "Hello There!!!";
  array = ["Pune", "Hyd", "Mumbai"];
  ngOnIt(): void {
    this.object = MOBPART; //For memory release
  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.Mobobject = MOBPART[];
  // }
  objects = [
    {
      idcolor: "red",
      pricecolor: "green",
      modelcolor: "blue",
      instockcolor: "orange",
    },
  ];
  object: Mobobject[] = MOBPART;
  calProd() {
    let tot = 0;
    for (let obj of this.object) {
      tot = tot + obj.instock;
    }
    return tot;
  }
  upQuantity(obj) {
    // alert('We are in upQuantity');
    if (obj.quantity < obj.instock) obj.quantity++;
  }

  downQuantity(obj) {
    if (obj.quantity != 0) obj.quantity--;
  }
  catchVal(eventdata, obj) {
    console.clear();
    console.log("We r in event", event);
    console.log("We r in cachval", eventdata);
  }
}
