import colors from './colors';
let backgroundColor = {};
Object.entries(colors).map( ([name, color]) => backgroundColor[name] = { backgroundColor: color } );

export const bg = {...backgroundColor}

export default bg;
