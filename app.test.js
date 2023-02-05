
const app = require('./app')

test("should check if string is lowercase", () => {
  expect(app.isLowercase("item")).toBe(true)
  expect(app.isLowercase(3232)).toBe(false)
  expect(app.isLowercase("itemS")).toBe(false)
  expect(app.isLowercase(false)).toBe(false)
  expect(app.isLowercase("iTem")).toBe(false)
})

test("should check if string is uppercase", () => {
  expect(app.isUppercase("ITEM")).toBe(true)
  expect(app.isUppercase(true)).toBe(false)
  expect(app.isUppercase("Item")).toBe(false)
  expect(app.isUppercase(32222)).toBe(false)
  expect(app.isUppercase("item")).toBe(false)
})