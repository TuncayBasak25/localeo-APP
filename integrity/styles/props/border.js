import * as colors from './colors';

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

export const lr = val => {return {borderTopLeftRadius: val, borderBottomLeftRadius: val}}
export const rr = val => {return {borderTopRightRadius: val, borderBottomRightRadius: val}}
export const tr = val => {return {borderTopRigthRadius: val, borderTopLeftRadius: val}}
export const br = val => {return {borderBottomRightRadius: val, borderBottomLeftRadius: val}}

export const tlr = val => {return {borderTopLeftRadius: val}}
export const trr = val => {return {borderTopRightRadius: val}}
export const blr = val => {return {borderBottomLeftRadius: val}}
export const brr = val => {return {borderBottomRightRadius: val}}

export const border = {
  w: w, lw: lw, rw: rw, tw: tw, bw: bw,
  r: r, lr: lr, rr: rr, tr: tr, br: br, tlr: tlr, trr: trr, blr: blr, brr: brr,
  ...borderColors,
  ...leftColors,
  ...rightColors,
  ...topColors,
  ...botColors
}

export default border;
