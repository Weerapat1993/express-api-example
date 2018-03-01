import { Article } from '../../models';
import { Controller } from '../Kernel';

/**
 * @api {get} /articles GET Article Lists
 * @apiSampleRequest /api/articles
 * @apiName GetArticles
 * @apiGroup Article
 * @apiUse ErrorResponse
 */

/**
 * @api {get} /articles/:id GET Article By ID
 * @apiSampleRequest /api/articles/article:1
 * @apiName GetArticleByID
 * @apiGroup Article
 * @apiUse ErrorResponse
 */

/**
 * @api {post} /articles POST Create Article
 * @apiSampleRequest /api/articles
 * @apiParam {String} title  Title Story
 * @apiParam {String} description     Story Descripiton
 * @apiName PostCreateArticle
 * @apiGroup Article
 * @apiUse ErrorResponse
 */

// Function
const getArticleList = async () => {
  const articles = await Article.collection().query((qb) => {
    qb.innerJoin('users', 'users.id', 'articles.id');
    qb.select('articles.*', 'users.name as user_name', 'users.avatar');
  }).fetch();
  return articles;
};

class ArticleController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Article;
  }

  getList() {
    this.Expectation(async () => {
      const products = await getArticleList();
      await this.getSuccess(200, products);
    });
  }

  getByID() {
    const { id } = this.request.params;
    this.Expectation(async () => {
      const data = await this.Model
        .collection()
        .query((qb) => {
          qb.innerJoin('users', 'users.id', 'articles.id');
          qb.select('articles.*', 'users.name as user_name', 'users.avatar');
          return { where: { [this.primaryKey]: id } };
        })
        .fetchOne();
      if (data) {
        await this.getSuccess(200, data);
      } else {
        const error = 'Data is not found.';
        await this.getFailure(404, error);
      }
    });
  }
}

export default ArticleController;
