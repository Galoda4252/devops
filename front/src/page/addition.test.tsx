import { addition } from './addition';

describe('addition', () => {
  it('retourne la somme de deux nombres positifs', () => {
    expect(addition(4, 5)).toBe(9);
  });

  it('retourne la somme avec des nombres négatifs', () => {
    expect(addition(-2, -3)).toBe(-5);
  });

  it('gère la somme avec zéro', () => {
    expect(addition(0, 7)).toBe(7);
  });

  it('gère les décimaux', () => {
    expect(addition(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
