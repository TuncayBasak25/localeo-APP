import { lay, mg, bg, border } from '../props/props';


export const inlineFormWrapper = [
  lay.relW(80),
  lay.h(60),

  mg.v(10),

  lay.jc.center,
  lay.ac.center,
  lay.as.center,

  border.r(10),

  bg.primary
]

export default inlineFormWrapper;
