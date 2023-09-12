interface AddType {
  x: number;
  y: number;
}
interface MulType {
  x: number;
  y: number;
}

export function add({ x, y }: AddType) {
  return x + y;
}

export function mul({ x, y }: MulType) {
  return x * y;
}
