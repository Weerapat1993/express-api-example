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

class ArticleController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Article;
  }
}

export default ArticleController;
