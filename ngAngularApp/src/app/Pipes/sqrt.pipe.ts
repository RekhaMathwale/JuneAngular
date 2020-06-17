import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sqrt",
})
export class SqrtPipe implements PipeTransform {
  transform(value) {
    // rest and spread op
    // code
    return Math.sqrt(value);
  }
}
