
import { Triangle } from "../src/js/triangle";

it('30, 35-re 525.0 működik', () => {
    const tri = new Triangle();
    expect(tri.calcArea(30, 35)).toBe(525.0);
})

it('A calcArea() létezik', () => {
    const tri = new Triangle();
    expect(tri.calcArea()).toBeDefined();
})

it('Az area tulajdonság létezik', () => {
    const tri = new Triangle();
    expect(tri.area).toBeDefined();
})



