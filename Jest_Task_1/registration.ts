export class registrationForm {
    password: any;
    email: string;
    login: string;
    sex: string;
    age: number;
    passport: any;
    constructor(
        password: number,
        email: string,
        login: string,
        sex: string,
        age: number,
        passport: any
    ) {
        this.password = password;
        this.email = email;
        this.login = login;
        this.sex = sex;
        this.age = age;
        this.passport = passport;
    }
}