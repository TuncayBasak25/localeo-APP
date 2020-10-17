import Api from 'localeo-api';
import App from '../App';


export default async function autoLogin()
{
  App.logging = true;
  let { user } = await Api.login('tuncay', '12345678');
  App.user = user;
  App.logging = false;
}
