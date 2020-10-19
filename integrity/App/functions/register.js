import Api from 'localeo-api';
import App from '../App';


export async function register()
{
  App.registering = true;
  let { user } = await Api.register(
    App.registerCreds.username,
    App.registerCreds.email,
    App.registerCreds.password,
    App.registerCreds.confirmPassword
  );
  App.registering = false;
}

export default register;
