import Api from 'localeo-api';
import App from '../App';

export async function updateMessages()
{
  if (App.user && !App.updatingMessage)
  {console.log("Update");
    App.updatingMessage = true;
    let lastMessageId = 0;
    if (App.messages.length > 0) lastMessageId = App.messages[App.messages.length-1].id;

    const { newMessages, alert, error } = await Api.getNewMessages(lastMessageId);
    if (error) console.log(error);

    if (newMessages) App.messages = App.messages.concat(newMessages);

    App.updatingMessage = false;
    return newMessages[newMessages.length-1];
  }
}

export default updateMessages;
