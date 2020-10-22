export const pd = {
  p: val => {return {padding: val}},

  start: val => {return {paddingStart: val}},
  end: val => {return {paddingEnd: val}},

  h: val => {return {paddingHorizontal: val}},
  v: val => {return {paddingVertical: val}},

  l: val => {return {paddingLeft: val}},
  r: val => {return {paddingRight: val}},
  t: val => {return {paddingTop: val}},
  b: val => {return {paddingBottom: val}}
}

export default pd;
