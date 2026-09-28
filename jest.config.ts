import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Resolve o mapeamento do caractere @/ para a pasta src nas importações
    "^@/(.*)$": "<rootDir>/src/$1",
    // Ignora importações de CSS/Imagens nos testes unitários para não quebrar o Jest
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
        useESM: true, // Força o uso de módulos ECMAScript legítimos nos testes
      },
    ],
  },
};

export default config;
