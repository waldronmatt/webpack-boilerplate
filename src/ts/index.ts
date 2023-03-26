import './header';
import './footer';

// jest testing
export const sum = (...a: number[]) =>
  a.reduce((accumulator, value) => accumulator + value, 0);
