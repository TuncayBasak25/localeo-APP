import pos from './pos';
import { Dimensions, StatusBar } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const statusBarHeight = StatusBar.currentHeight;
export const navbarHeight = screenHeight - windowHeight;

export const w = val => {return {width: val}}
export const h = val => {return {height: val}}

export const ratio = val => {return {aspectRatio: val}}

export const relW = val => {return {width: val + "%"}}
export const relH = val => {return {height: val + "%"}}

export const minW = val => {return {minWidth: val}}
export const minH = val => {return {minHeight: val}}

export const maxW = val => {return {maxWidth: val}}
export const maxH = val => {return {maxHeight: val}}

export const row = { flexDirection: "row" }
export const col = { flexDirection: "column" }

export const wrap = { flexWrap: "wrap" }
export const reverse = { flexWrap: "wrap-reverse" }
export const noWrap = { flexWrap: "noWrap" }

export const flx = val => {return {flex: val}}
export const grw = val => {return {flexGrow: val}}
export const shr = val => {return {flexShrink: val}}
export const bss = val => {return {flexBasis: val}}

export const show = { display: "flex" }
export const hide = { display: "none" }

export const jc = {
  start: { justifyContent: "flex-start" },
  end: { justifyContent: "flex-end" },
  center: { justifyContent: "center" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" }
}

export const ac = {
  stretch: { alignContent: "stretch" },
  start: { alignContent: "flex-start" },
  end: { alignContent: "flex-end" },
  center: { alignContent: "center" },
  baseline: { alignContent: "baseline" }
}

export const ai = {
  stretch: { alignItems: "stretch" },
  start: { alignItems: "flex-start" },
  end: { alignItems: "flex-end" },
  center: { alignItems: "center" },
  baseline: { alignItems: "baseline" }
}

export const as = {
  stretch: { alignSelf: "stretch" },
  start: { alignSelf: "flex-start" },
  end: { alignSelf: "flex-end" },
  center: { alignSelf: "center" },
  baseline: { alignSelf: "baseline" }
}

export const lay = {
  w: w, h: h,
  relW: relW, relH: relH,
  minW: minW, minH: minH,
  maxW: maxW, maxH: maxH,

  ratio: ratio,

  row: row, col: col,

  wrap: wrap, reverse: reverse, noWrap: noWrap,

  flx: flx, grw: grw, shr: shr, bss: bss,

  jc: jc, ai: ai, ac: ac, as: as,

  ...pos,
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  windowWidth: windowWidth,
  windowHeight: windowHeight,

  statusBarHeight: statusBarHeight,
  navbarHeight: navbarHeight
}

export default lay;
