import colors from './colors';

let borderColors = {};
let leftColors = {};
let rightColors = {};
let topColors = {};
let botColors = {};

Object.entries(colors).map( ([name, color]) => borderColors[name] = { borderColor: color } );
Object.entries(colors).map( ([name, color]) => leftColors[name + "Left"] = { borderLeftColor: color } );
Object.entries(colors).map( ([name, color]) => rightColors[name + "Right"] = { borderRightColor: color } );
Object.entries(colors).map( ([name, color]) => topColors[name + "Top"] = { borderTopColor: color } );
Object.entries(colors).map( ([name, color]) => botColors[name + "Bot"] = { borderBottomColor: color } );

const w = val => {return {borderWidth: val}}

const lw = val => {return {borderLeftWidth: val}}
const rw = val => {return {borderRightWidth: val}}
const tw = val => {return {borderTopWidth: val}}
const bw = val => {return {borderBottomWidth: val}}

export const r = val => {return {borderRadius: val}}

export const tlr = val => {return {borderTopLeftRadius: val}}
export const trr = val => {return {borderTopRightRadius: val}}
export const blr = val => {return {borderBottomLeftRadius: val}}
export const brr = val => {return {borderBottomRightRadius: val}}

export const border = {
  w: w, lw: lw, rw: rw, tw: tw, bw: bw,
  r: r, tlr: tlr, trr: trr, blr: blr, brr: brr,
  ...borderColors,
  ...leftColors,
  ...rightColors,
  ...topColors,
  ...botColors
}

export default border;
