import { num } from "../src/js";

describe('Index', () => {  
    describe('num', () => {
        test('Debería decir que no es una entrada válida', () => {
            expect(() => num('No number')).toThrow();
        });
        test('Debería convertir número a romano - Letra I', () => {
            expect(num(1)).toBe('I');
        });
    });
});