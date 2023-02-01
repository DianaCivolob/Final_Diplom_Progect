
export class registrationForm1{
 add = (x: number, y: number) => x + y
 subtract = (x: any, y: any) => x + (-y)
 multiply = (x: any, y: any) => x === y
 comparison = (x: any, y: any) => x > y
 constructor(
     add = (x: number, y: number) => x + y,
     subtract = (x: any, y: any) => x + (-y),
     multiply = (x: any, y: any) => x === y,
     comparison = (x: any, y: any) => x > y
 ) { this.add = add
  this.subtract = subtract
  this.multiply = multiply
  this.comparison = comparison
 }
}