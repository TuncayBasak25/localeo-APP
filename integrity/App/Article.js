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
    this.articlePage = 1;
    this.articleMax = 5;
    this.noMoreArticles = false;

    this.actualArticle = null;

    this.images = {};
    this.focus = null;
    this.searching = false;

    this.articleSearchWords = '';

    this.newArticle = {};

    this.category = 'tout';
    this.sousCategory = 'tout';

    this.categories = [];
  }

  async searchArticle(words, onlyMy)
  {
    if (words || words === '') //New search
    {
      this.articles = [];
      this.articleSearchWords = words;
      this.articlePage = 1;
      this.articleMax = 5;
      this.noMoreArticles = false;
    }
    else
    {
      this.articlePage++;
    }

    if (onlyMy) this.articleSearchWords = this.articleSearchWords + '&userId=' + this.user.id;

    if (this.searching || (this.noMoreArticles && (new Date).getTime() - this.noMoreArticles < 1000) ) return false;
    this.searching = true;

    const articles = await Api.searchArticle({
      words: this.articleSearchWords,
      categories: (this.category === 'tout') ? '' : this.category,
      sousCategories: (this.sousCategory === 'tout') ? '' : this.sousCategory
    }, this.articlePage, this.articleMax);

    if (articles.length === 0)
    {
      this.noMoreArticles = (new Date).getTime();
      this.searching = false;
      return true;
    }console.log(articles);

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
    const baseLenght = this.articles.length;

    this.articles = this.articles.concat(articles);

    let a = this.articles.map( v => JSON.stringify(v) );
    a = [...new Set(a)];
    this.articles = a.map( v => JSON.parse(v) );

    this.searching = false;

    if (baseLenght === this.articles.length) return false;

    return true;
  }

  getCategories()
  {
    Api.getCategories()
    .then( categories => { if (!categories.error) this.categories = categories} )
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

    return image;
  }

  async postArticle(title, description, price, category)
  {
    this.postingArticle = true;
    const { article, error } = await Api.createArticle({
      title: title,
      description: description,
      price: price,
      category: category,

      latitude: this.newArticle.latitude,
      longitude: this.newArticle.longitude,
    });

    if (error)
    {
      this.postingArticle = false;
      return { error: error };
    }

    if (!article)
    {
      this.postingArticle = false;
      return { error: "Unexpected probleme at App, Article, postArticle" };
    }

    if (this.newArticle.image1)
    {
      await Api.createImage( { data: this.newArticle.image1, articleId: article.id } )
      .then( ({ error, success }) => { if (error) console.log(error + 1); else if (success) console.log("Image uploaded."); } )
      .catch(e => console.log(e));
    }

    if (this.newArticle.image2)
    {
      await Api.createImage( { data: this.newArticle.image2, articleId: article.id } )
      .then( ({ error, success }) => { if (error) console.log(error + 2); else if (success) console.log("Image uploaded."); } )
      .catch(e => console.log(e));
    }

    if (this.newArticle.image3)
    {
      await Api.createImage( { data: this.newArticle.image3, articleId: article.id } )
      .then( ({ error, success }) => { if (error) console.log(error + 3); else if (success) console.log("Image uploaded."); } )
      .catch(e => console.log(e));
    }
    this.postingArticle = false;

    return {};
  }

}

export default Article;
