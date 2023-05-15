const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const { describe, it, beforeEach } = require('mocha');
const app = require('../server');
const Product = require('../models/Product');
const Category = require('../models/Category');
const User = require('../models/User');

const createAdminUser = async () => {
  const adminData = {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    hashedPassword: 'SecurePassword123!',
    isAdmin: true,
  };

  const admin = new User(adminData);
  const savedAdmin = await admin.save();
  return savedAdmin;
};

chai.use(chaiHttp);
const expect = chai.expect;
// Agent that will keep track of our cookies
const agent = chai.request.agent(app);
describe('Product Tests', () => {
  // Clean up the database before and after the test run
  before(async () => {
    await Product.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});
  });

  let adminAccessToken;

  beforeEach(async () => {
    // Create an admin user
    const adminUser = await createAdminUser();

    // Log in as the admin user
    const res = await agent
      .post('/api/auth/login')
      .send({ email: adminUser.email, password: 'SecurePassword123!' });

    // Get the admin's access token
    adminAccessToken = `Bearer ${res.body.token}`;
  });

  afterEach(async () => {
    await Product.deleteMany({});
    await User.deleteMany({});
  });

  // Test creating a product
  it('should create a new product', async () => {
    // Create a new category to associate with the product
    const category = new Category({
      name: 'Electronics',
    });
    await category.save();

    // Prepare the necessary data for the request
    const productData = {
      category: category._id,
      name: 'iPhone 13',
      price: 999,
      description: 'The latest iPhone model',
      stock: 10,
      image: 'https://example.com/iphone-13.jpg',
    };

    // Make an HTTP POST request to the API and check the response
    const res = await chai
      .request(app)
      .post(`/api/product/`)
      .set('Authorization', adminAccessToken)
      .send(productData);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('product');
    expect(res.body.product).to.have.property('_id');
    expect(res.body.product.name).to.equal(productData.name);
    expect(res.body.product.price).to.equal(productData.price);
    expect(res.body.product.description).to.equal(productData.description);
    expect(res.body.product.stock).to.equal(productData.stock);
    expect(res.body.product.image).to.equal(productData.image);
  });
});
