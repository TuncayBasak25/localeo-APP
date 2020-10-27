import LocationHandler from './LocationHandler';
import Api from 'localeo-api';

import * as ImagePicker from 'expo-image-picker';
import * as Fs from 'expo-file-system';
import * as ImageManipulator from "expo-image-manipulator";

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

  async handleChooseAvatar()
{
  const image = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (image.cancelled) return null;

  image.info = await Fs.getInfoAsync(image.uri, {size: true});
  image.resize = await ImageManipulator.manipulateAsync(image.uri, new Array({resize: {width: 150}}), { compress: 1 });

  image.uri = image.resize.uri;

  let avatar = await Fs.readAsStringAsync(image.uri, { encoding: Fs.EncodingType.Base64 });

  return avatar;
}

}

export default User;
