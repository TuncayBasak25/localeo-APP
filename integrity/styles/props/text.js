import * as colors from './colors';
let textColors = {};
Object.entries(colors).map( ([name, color]) => textColors[name] = { color: color } );

export const size = val => {return {fontSize: val}}

export const italic = { fontStyle: "italic" }
export const bold = { fontWeight: "bold" }

export const w1 = { fontWeight: "100" }
export const w2 = { fontWeight: "200" }
export const w3 = { fontWeight: "300" }
export const w4 = { fontWeight: "400" }
export const w5 = { fontWeight: "500" }
export const w6 = { fontWeight: "600" }
export const w7 = { fontWeight: "700" }
export const w8 = { fontWeight: "800" }
export const w9 = { fontWeight: "900" }

export const lineHeight = val => {return {lineHeight: val}}
export const family = val => {return {fontFamily: val}}

const auto = { textAlign: "auto" }
const left = { textAlign: "left" }
const right = { textAlign: "right" }
const center = { textAlign: "center" }
const justify = { textAlign: "justify" }

export const noDec = { textDecorationLine: "none" }
export const underline = { textDecorationLine: "underline" }
export const lineThrough = { textDecorationLine: "line-through" }
export const underThrough = { textDecorationLine: "underline line-through" }

export const text = {
  size: size,

  italic: italic,
  bold: bold,

  w1: w1, w2: w2, w3: w3, w4: w4, w5: w5, w6: w6, w7: w7, w8: w8, w9: w9,

  lineHeight: lineHeight,
  family: family,

  auto: auto,
  left: left,
  right: right,
  center: center,
  justify: justify,

  noDec: noDec,
  underline: underline,
  lineThrough: lineThrough,
  underThrough: underThrough,

  ...textColors
}

export default text;
