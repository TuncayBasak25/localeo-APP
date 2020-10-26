import Message from './Message';
import Api from 'localeo-api';

import * as ImagePicker from 'expo-image-picker';
import * as Fs from 'expo-file-system';
import * as ImageManipulator from "expo-image-manipulator";

export class User extends Message
{
  constructor()
  {
    super();
  }

  async handleChooseAvatar(imgNo)
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
