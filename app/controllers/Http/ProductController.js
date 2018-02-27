import { Product } from '../../models';
import { Controller } from '../Kernel';

// Function
const getProductList = async () => {
  const products = await Product.collection().query((qb) => {
    qb.innerJoin('shops', 'shops.shop_id', 'products.shop_id');
    qb.select('products.*', 'shops.shop_name as shop_name');
  }).fetch();

  // Map Data
  const newProducts = products.map((item) => {
    const state = item.attributes;
    return {
      ...state,
      shop: {
        shop_id: state.shop_id,
        shop_name: state.shop_name,
      },
    };
  });
  return newProducts;
};

/**
 * @api {get} /products GET Product Lists
 * @apiSampleRequest /api/products
 * @apiName GetProducts
 * @apiGroup Product
 * @apiUse ErrorResponse
 */

/**
 * @api {get} /products/:id GET Product By ID
 * @apiSampleRequest /api/products/product:1
 * @apiName GetProductByID
 * @apiGroup Product
 * @apiUse ErrorResponse
 */

class ProductController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'product_id';
    this.Model = Product;
  }
  // GET Product List
  index() {
    this.Expectation(async () => {
      const products = await getProductList();
      await this.getSuccess(200, products);
    });
  }
}

export default ProductController;
