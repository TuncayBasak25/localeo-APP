export const abs = { position: "absolute" }
export const rel = { position: "relative" }

export const left = value => { return { left: value } }
export const right = value => { return { right: value } }
export const top = value => { return { top: value } }
export const bot = value => { return { bottom: value } }

export const topLeft = value => { return { left: value, top: value } }
export const topRight = value => { return { right: value, top: value } }
export const botLeft = value => { return { top: value, bottom: value } }
export const botRight = value => { return { bottom: value, bottom: value } }


export const pos = {
  abs: abs,
  rel: rel,

  left: left,
  right: right,
  top: top,
  bot: bot,

  topLeft: topLeft,
  topRight: topRight,
  botLeft: botLeft,
  botRight: botRight,
}

export default pos;
