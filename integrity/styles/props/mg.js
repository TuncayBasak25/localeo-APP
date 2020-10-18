export const mg = {
  m: val => {return {margin: val}},

  start: val => {return {marginStart: val}},
  end: val => {return {marginEnd: val}},

  h: val => {return {marginHorizontal: val}},
  v: val => {return {marginVertical: val}},

  l: val => {return {marginLeft: val}},
  r: val => {return {marginRight: val}},
  t: val => {return {marginTop: val}},
  b: val => {return {marginBottom: val}}
}

export default mg;
