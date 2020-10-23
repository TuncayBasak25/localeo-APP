import Message from './Message';
import Api from 'localeo-api';

import * as ImagePicker from 'expo-image-picker';
import * as Fs from 'expo-file-system';
import * as ImageManipulator from "expo-image-manipulator";

export class Article extends Message
{
  constructor()
  {
    super();
    this.articles = [];
    this.images = {};
    this.focus = null;
    this.searching = false;

    this.newArticle = {};

    this.category = 'tout';
    this.sousCategory = 'tout';
  }

  async searchArticle(words)
  {
    if (this.searching) return;
    this.searching = true;
    const articles = await Api.searchArticle({
      words: words,
      categories: (this.category === 'tout') ? '' : this.category,
      sousCategories: (this.sousCategory === 'tout') ? '' : this.sousCategory,
    });

    if (articles === []) return;

    for (let article of articles)
    {
      for (let image of article.Images)
      {
        let id = image.id;
        if (!this.images['image'+id])
        {
          this.images['image'+id] = null;
          Api.getImage(id)
          .then( ({ data }) => this.images['image'+id] = { uri: `data:images/jpeg;base64,${data}` })
          .catch(e => console.log(e));
        }
      }
    }
    this.articles = articles;
    this.searching = false;
  }

  getCategories()
  {
    Api.getCategories()
    .then( categories => this.categories = categories )
    .catch(e => console.log(e));
  }

  getTimeDiff(createdAt)
  {
    let base = ((new Date).getTime() - (Date.parse(createdAt))) / 1000;
    let time = Math.ceil(base);
    let text = `Posté il y a ${time} seconds`;
    if (time > 59) { time = Math.ceil(base / 60); text = `Posté il y a ${time} minute` }
    if (time > 59) { time = Math.ceil(base / 3600); text = `Posté il y a ${time} heure` }
    if (time > 23) { time = Math.ceil(base / 3600 / 24); text = `Posté il y a ${time} jour` }
    if (time > 7 ) { time = Math.ceil(base / 3600 /24 / 7); text = `Posté il y a ${time} semaine` }
    if (time > 4 ) { time = Math.ceil(base / 3600 /24 / 30); text = `Posté il y a ${time} mois` }
    if (time > 11) { time = Math.ceil(base / 3600 /24 / 30 / 12); text = `Posté il y a ${time} an` }

    return text;
  }

  async handleChooseImage(imgNo)
  {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (image.cancelled) return null;

    image.info = await Fs.getInfoAsync(image.uri, {size: true});
    image.resize = await ImageManipulator.manipulateAsync(image.uri, new Array({resize: {width: 800}}), { compress: 1 });

    image.uri = image.resize.uri;

    this.newArticle['image' + imgNo] = await Fs.readAsStringAsync(image.uri, { encoding: Fs.EncodingType.Base64 });
    console.log(this.newArticle['image' + imgNo]);
    return image;
  }

  async postArticle(title, description, price)
  {
    const { article, error } = await Api.createArticle({
      title: title,
      description: description,
      price: price,

      lattitde: this.location.lattitude,
      longitude: this.location.longitude,
    });

    if (error) return { error: error };

    if (!article) return { error: "Unexpected probleme at App, Article, postArticle" };

    if (this.newArticle.image1)
    {
      App.createImage( { data: image1, articleId: article.id } )
      .then( () => {} )
      .catch(e => console.log(e));
    }

    if (this.newArticle.image2)
    {
      App.createImage( { data: image2.data, articleId: article.id } )
      .then( () => {} )
      .catch(e => console.log(e));
    }

    if (this.newArticle.image3)
    {
      App.createImage( { data: image1, articleId: article.id } )
      .then( () => {} )
      .catch(e => console.log(e));
    }
  }

}

export default Article;
