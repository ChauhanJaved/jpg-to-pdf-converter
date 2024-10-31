export {};

declare global {
  interface Window {
    fastspring: {
      builder: {
        init: (options: { storeFront: string; popup: boolean }) => void;
        checkout: (options: { products: { path: string }[] }) => void;
      };
    };
  }
}
