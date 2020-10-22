import User from './User';
import Api from 'localeo-api';

export class Session extends User
{
  constructor()
  {
    super();
    this.user = null;
  }

  async login(username, password)
  {
    this.logging = true;
    const { user, error } = await Api.login(username, password);
    this.logging = false;
    if (error) return { error: error };

    this.user = user;
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
    return {};
  }
}

export default Session;
