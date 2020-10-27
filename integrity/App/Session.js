import Article from './Article';
import Api from 'localeo-api';

export class Session extends Article
{
  constructor()
  {
    super();
    this.user = null;
  }

  async login(username, password)
  {
    this.logging = true;
    const { user, sessionToken, error } = await Api.login(username, password);
    this.logging = false;
    if (error) return { error: error };

    this.user = user;
    Api.sessionToken = sessionToken;
    return {};
  }

  async register(username, email, password, confirmPassword)
  {
    this.registering = true;
    const { success, error } = await Api.register(username, email, password, confirmPassword);
    this.registering = false;
    if (error) return { error: error };
    return {};
  }

  async logout()
  {
    const { error } = await Api.logout();
    if (error) return { error: error };
    this.user = null;
    this.corresponder = null;
    this.messages = [];

    Api.sessionToken = null;
    return {};
  }
}

export default Session;
