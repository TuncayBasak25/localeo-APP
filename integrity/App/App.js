import autoLogin from './functions/autoLogin';

import BottomBar from './components/BottomBar';
import TextInput from './components/TextInput';
import Button from './components/Button';

const App = {
  //Variables

  //User Variables
  user: null,
  logging: false,

  login: {
    username: null,
    password: null
  },

  register: {
    username: null,
    email: null,
    password: null,
    passwordConfirm: null,

    firstName: null,
    lastName: null,
    phone: null,
    address: null,

    lattitude: null,
    longitude: null,

    avatar: null
  },

  updateUser: {
    username: null,
    email: null,
    password: null,

    firstName: null,
    lastName: null,
    phone: null,
    address: null,

    lattitude: null,
    longitude: null
  },

  //Functions
  autoLogin: autoLogin,

  //Components
  BottomBar: BottomBar,
  TextInput: TextInput,
  Button: Button
}

export default App;


export {
  App,
  autoLogin
};
