import Api from 'localeo-api';


export class Message
{
  constructor()
  {
    this.corresponder = null;
    this.messages = [];
  }

  async getCorresponder(userId)
  {
    const { user, error } = await Api.getUser(userId);
    if (error) return { error: error };

    this.corresponder = user;
    return {};
  }

  async sendMessage(text)
  {
    if (!this.corresponder) return { error: "There is no corresponder!" };
    const { message, error } = await Api.createMessage({ text: text, destinaterId: this.corresponder.id });
    if (error) return { error: error };
    return {};
  }

  async updateMessages()
  {
    this.isUpdatingMessage = true;
    const lastMessageId = (this.messages.length > 0) ? this.messages[this.messages.length-1].id : 0;
    const { newMessages, error } = await Api.getNewMessages(lastMessageId);
    if (error) return { error: error };
    else if (!newMessages) return false;

    this.messages = this.messages.concat(newMessages);

    let a = this.messages.map( v => JSON.stringify(v) );
    a = [...new Set(a)];
    this.messages = a.map( v => JSON.parse(v) );

    this.isUpdatingMessage = false;
    return true;
  }
}


export default Message;
