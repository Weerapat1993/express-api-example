import { Article } from '../models';
import Controller from './Controller';

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

class ArticleController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Article;
  }
}

export default ArticleController;
