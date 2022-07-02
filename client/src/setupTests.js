import '@testing-library/jest-dom/extend-expect'

const localStorageMock = {
  // eslint-disable-next-line no-undef
  getItem: jest.fn(),
  // eslint-disable-next-line no-undef
  setItem: jest.fn(),
  // eslint-disable-next-line no-undef
  removeItem: jest.fn(),
  // eslint-disable-next-line no-undef
  clear: jest.fn()
}
global.localStorage = localStorageMock
