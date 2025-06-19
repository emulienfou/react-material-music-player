declare const withoutPropagation: <T extends unknown[]>(
  callback: (...args: T) => void,
  ...args: T
) => (e: React.MouseEvent) => void;
export default withoutPropagation;
