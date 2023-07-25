export const cartesian = (...a: Array<any[]>) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
