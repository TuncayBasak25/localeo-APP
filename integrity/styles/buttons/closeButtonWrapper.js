import { lay, bg, border } from '../styles';


export const closeButtonWrapper = [
  lay.abs,
  lay.as.end,
  lay.relW(15),
  lay.ratio(1),
  lay.top(20),
  lay.right(10),
  bg.primary,
  border.r(100)
]

export default closeButtonWrapper;
