import Message from './Message';
import Api from 'localeo-api';

export class Article extends Message
{
  constructor()
  {
    super();
    this.articles = [];
    this.images = {};
    this.focus = null;
    this.searching = false;
  }

  async searchArticle(words)
  {
    if (this.searching) return;
    this.searching = true;
    const articles = await Api.searchArticle({ words: words });

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

  getTimeDiff(createdAt)
  {
    let base = ((new Date).getTime() - (Date.parse(createdAt))) / 1000;
    let time = Math.ceil(base);
    let text = `Posté il y a ${time} seconds`;
    if (time > 59) { time = Math.round(base / 60); text = `Posté il y a ${time} minute` }
    if (time > 59) { time = Math.round(base / 3600); text = `Posté il y a ${time} heure` }
    if (time > 23) { time = Math.round(base / 3600 / 24); text = `Posté il y a ${time} jour` }
    if (time > 7 ) { time = Math.round(base / 3600 /24 / 7); text = `Posté il y a ${time} semaine` }
    if (time > 4 ) { time = Math.round(base / 3600 /24 / 30); text = `Posté il y a ${time} mois` }
    if (time > 11) { time = Math.round(base / 3600 /24 / 30 / 12); text = `Posté il y a ${time} an` }

    return text;
  }

}

export default Article;
