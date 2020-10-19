import Api from 'localeo-api';
import App from '../App';


export async function login()
{console.log(App.loginCreds);
  App.logging = true;
  let { error, user } = await Api.login(App.loginCreds.username, App.loginCreds.password);
  App.logging = false;
  if (error) return error;
  App.user = user;
}

export default login;
