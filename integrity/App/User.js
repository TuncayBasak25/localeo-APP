import LocationHandler from './LocationHandler';
import Api from 'localeo-api';

export class User extends LocationHandler
{
  constructor()
  {
    super();
    this.users = {};
  }

  async getUser(userId)
  {
    if (this.users["user" + userId]) return { user: this.users["user" + user.id] };
    const { user, error } = await Api.getUser(userId);

    if (error) return { error: error };

    if (user) this.users["user" + user.id] = user;
    else return { error: "unknown get user error" }

    return { user: this.users["user" + user.id] };
  }

}

export default User;
