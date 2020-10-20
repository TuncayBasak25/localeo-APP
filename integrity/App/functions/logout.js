import Api from 'localeo-api';
import App from '../App';


export async function logout()
{
  let { error, user } = await Api.logout();
  App.user = null;
}

export default logout;
