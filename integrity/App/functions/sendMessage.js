import Api from 'localeo-api';
import App from '../App';


export async function sendMessage()
{
  if (!App.user) return;
  let { error, message } = await Api.createMessage({ destinaterId: App.corresponder.id, text: App.myMessage });
  if (error) console.log(error);
  return message;
}

export default sendMessage;
