export type Size = 'S' | 'M' | 'L' | 'XL';
export type Products = {
  title: string;
  createdAt: Date;
  stocck: number;
  size?: Size;
};
