import Article from './Article';
import Api from 'localeo-api';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const lastSessionToken = await AsyncStorage.getItem('sessionToken');
    if (lastSessionToken)
    {
      Api.sessionToken = lastSessionToken;
      const user = await AsyncStorage.getItem('user');
      this.user = JSON.parse(user);
      return { restore: true };
    }

    if (!username && !password) return {};

    const { user, sessionToken, error } = await Api.login(username, password);
    this.logging = false;
    if (error) return { error: error };

    await AsyncStorage.setItem('sessionToken', sessionToken);
    await AsyncStorage.setItem('user', JSON.stringify(user));

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

    await AsyncStorage.removeItem('sessionToken');
    await AsyncStorage.removeItem('user');

    return {};
  }
}

export default Session;
