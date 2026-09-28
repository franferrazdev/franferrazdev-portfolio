import "@testing-library/jest-dom";

// Cria um mock global para o IntersectionObserver, já que o ambiente de testes do Node não possui essa API nativa
const mockIntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};

// Atribui ao objeto global mapeando o constructor correto exigido pela Web API
global.IntersectionObserver =
  mockIntersectionObserver as unknown as typeof IntersectionObserver;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
  }),
});
