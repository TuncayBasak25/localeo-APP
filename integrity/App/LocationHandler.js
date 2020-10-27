import * as Location from 'expo-location';

export class LocationHandler
{
  constructor()
  {
    this.location = {};
  }

  async getLocation()
  {
    this.loadingLocation = true;
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') return { error: "Accés refusée" };

    this.location = await Location.getCurrentPositionAsync({});

    this.newArticle.latitude = this.location.coords.latitude;
    this.newArticle.longitude = this.location.coords.longitude;

    this.loadingLocation = false;

    return {};
  }

}

export default LocationHandler;
