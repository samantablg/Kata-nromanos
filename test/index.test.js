import { num } from "../src/js";

describe('num', () => {
    test('Debería decir que no es una entrada válida', () => {
        expect(num('hola')).toBe('I');
    });
    test('Debería convertir número a romano - Letra I', () => {
        expect(num(1)).toBe('I');
    });
});