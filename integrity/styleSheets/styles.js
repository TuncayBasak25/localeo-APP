import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const text = {
  center: {textAlign: "center"},
  left: {textAlign: "left"},
  right: {textAlign: "right"},
  justify: {textAlign: "justify"},
}

export const safeArea = {
  flex: 1,
  top: StatusBar.currentHeight
}

export const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

export const flexRow = { flexDirection: "row" }
export const flexColumn = { flexDirection: "column" }

export const position = {
  absolute: {position: "absolute"},
}

export const flex = val => { return { flex: val } }

export const jc = {
  start: { justifyContent: "flex-start" },
  end: { justifyContent: "flex-end" },
  center: { justifyContent: "center" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" }
}

export const ai = {
  stretch: { alignItems: "stretch" },
  start: { alignItems: "flex-start" },
  end: { alignItems: "flex-end" },
  center: { alignItems: "center" },
  baseline: { alignItems: "baseline" }
}

export const ac = {
  stretch: { alignContent: "stretch" },
  start: { alignContent: "flex-start" },
  end: { alignContent: "flex-end" },
  center: { alignContent: "center" },
  baseline: { alignContent: "baseline" }
}

export const as = {
  stretch: { alignSelf: "stretch" },
  start: { alignSelf: "flex-start" },
  end: { alignSelf: "flex-end" },
  center: { alignSelf: "center" },
  baseline: { alignSelf: "baseline" }
}

export const borderRadius = value => { return { borderRadius: value } }
export const border = value => { return { borderWidth: value } }

export const widthP = percentage => { return { width: percentage + "%" } }
export const heightP = percentage => { return { height: percentage + "%" } }

export const width = value => { return { width: value } }
export const height = value => { return { height: value } }

export const left = value => { return { left: value } }
export const right = value => { return { right: value } }
export const top = value => { return { top: value } }
export const bottom = value => { return { bottom: value } }

export const m = {
  m: val => {return {margin: val}},

  h: val => {return {marginHorizontal: val}},
  v: val => {return {marginVertical: val}},

  l: val => {return {marginLeft: val}},
  r: val => {return {marginRight: val}},
  t: val => {return {marginTop: val}},
  b: val => {return {marginBottom: val}}
}

export const p = {
  p: val => {return {padding: val}},

  h: val => {return {paddingHorizontal: val}},
  v: val => {return {paddingVertical: val}},

  l: val => {return {paddingLeft: val}},
  r: val => {return {paddingRight: val}},
  t: val => {return {paddingTop: val}},
  b: val => {return {paddingBottom: val}}
}

export const textInput = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  paddingLeft: 10
}

export const bg = {
  dark: { backgroundColor: "#404E59" },
  gray: { backgroundColor: "#4E5C6A" },
  orange: { backgroundColor: "#E78100" },
  white: { backgroundColor: "#A6BCD0" }
}

export const color = {
  dark: { color: "#404E59" },
  gray: { color: "#4E5C6A" },
  orange: { color: "#E78100" },
  white: { color: "#A6BCD0" }
}

export const fontSize = size => { return { fontSize: size } };

const Styles = {
  safeArea: safeArea,
  container: container,

  widthP: widthP,
  heightP: heightP,

  width: width,
  height: height,

  left: left,
  right: right,
  top: top,
  bottom: bottom,

  textInput: textInput,

  bg: bg,
  collor: color,
  fontSize: fontSize
};

export default Styles;


const validKeys = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "aspectRatio",
  "backfaceVisibility",
  "backgroundColor",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomWidth",
  "borderColor",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",
  "borderRightColor",
  "borderRightWidth",
  "borderStyle",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "color",
  "decomposedMatrix",
  "direction",
  "display",
  "elevation",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "height",
  "includeFontPadding",
  "justifyContent",
  "left",
  "letterSpacing",
  "lineHeight",
  "margin",
  "marginBottom",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "opacity",
  "overflow",
  "overlayColor",
  "padding",
  "paddingBottom",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingVertical",
  "position",
  "resizeMode",
  "right",
  "rotation",
  "scaleX",
  "scaleY",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "tintColor",
  "top",
  "transform",
  "transformMatrix",
  "translateX",
  "translateY",
  "width",
  "writingDirection",
  "zIndex"
]
