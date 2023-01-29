import { registrationForm } from "./registration";
const reg = new registrationForm(
    12345,
    "diana11833@gmail.com",
    "vedmochka_di",
    "W",
    20,
    "MP1251416"
);

describe("password", () => {
    test("negativ_test", () => {
        expect(reg.password).toMatch("urhbrfkb");
    });
    test("negativ_test1", () => {
        expect(reg.password).toBe("string");
    });
});
describe("login", () => {
    test("negativ_test2", () => {
        expect(reg.login).toBe("number");
    });
});
describe("age", () => {
    test("negativ_test3", () => {
        expect(reg.age).toBeLessThan(10);
    });
});
describe("age", () => {
    test("negativ_test4", () => {
        expect(reg.age).toBeGreaterThan(65);
    });
});
describe("sex", () => {
    test("negativ_test5", () => {
        expect(reg.sex).toEqual("M");
    });
});
describe("email", () => {
    test("negativ_test6", () => {
        expect(reg.email).toContain("_");
    });
});
describe("email", () => {
    test("negativ_test8", () => {
        expect(reg.email).not.toContain("gmail.com");
    });
});
describe("passport", () => {
    test("negativ_test9", () => {
        expect(reg.passport).not.toContain("MP");
    });
});
