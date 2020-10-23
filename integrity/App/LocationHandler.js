import * as Location from 'expo-location';

export class LocationHandler
{
  constructor()
  {
    this.location = {};
  }

  async getLocation()
  {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') return { error: "Accés refusée" };

    this.location = await Location.getCurrentPositionAsync({});

    this.postArticle.lattitde = this.location.lattitde;
    this.postArticle.longitude = this.location.longitude;

    return {};
  }

}

export default LocationHandler;
