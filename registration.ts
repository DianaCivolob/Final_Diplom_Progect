export class registrationForm {
    a = 1000
    b = 2.46
    c = 200
    g = 10
    f = 13
    m = 5
    d = 10
    number = (d: number, a: number) => d * a
    number1 = (d: number, b: number) => d * b
    number2 = (d: number, c: number) => d * c
    number3 = (y: number, g: number, z: number) => (y * g) <= z
    number4 = (y: number, f: number, z: number) => (y * f) <= z
    number5 = (y: number, m: number, z: number) => (y * m) <= z
    constructor
        ( a = 1000,
      b = 2.46,
       c = 200,
                g = 10,
                f = 13,
                m = 5,
                d = 10,
                number = (d: number, a: number) => d * a,
                number1 = (d: number, b: number) => d * b,
                number2 = (d: number, c: number) => d * c,
                number3 = (y: number, g: number, z: number) => (y * g) <= z,
                number4 = (y: number, f: number, z: number) => (y * f) <= z,
                number5 = (y: number, m: number, z: number) => (y * m) <= z,) {
        this.number = number;
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
        this.number4 = number4;
        this.number5 = number5;

    }

    static number(d: number, a: number) {
        return undefined;
    }
    static number1(d: number, b: number) {
        return undefined;
    }
    static number2(d: number, c: number) {
        return undefined;
    }
    static number3(y: number, g: number, z: number) {
        return undefined;
    }
    static number4(y: number, f: number, z: number) {
        return undefined;
    }static number5(y: number, m: number, z: number) {
        return undefined;
    }

    static add(x: number, y: number) {
        return undefined;
    }
    static subtract(x: number, y: number) {
        return undefined;
    }
    static multiply(x: number, y: number) {
        return undefined;
    }
    static comparison(x: number, y: number) {
        return undefined;
    }
}