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

}

export default Article;
