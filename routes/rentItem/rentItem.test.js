import request from 'supertest';
import server from '../../api/server';

const itemData = {
  catId: 1,
  name: 'tes',
  description: 'test description',
  price: 10,
  address: 'test address',
  imageUrl: 'https://robohash.org/quosenimdolorem.jpg?size=50x50&set=set1',
};
const userData = {
  email: 'authUser@test.com',
  password: 'test12',
  firstName: 'test',
  lastName: 'test',
};
const userData2 = {
  email: 'users@test.com',
  password: 'test12',
  firstName: 'test',
  lastName: 'test',
};
let authToken;
let token2;
const BaseUrl = '/api/rentItems';

beforeAll(async () => {
  jest.setTimeout(30000);

  await request(server)
    .post('/api/auth/register')
    .send(userData);

  await request(server)
    .post('/api/auth/register')
    .send(userData2);

  const { body } = await request(server)
    .post('/api/auth/login')
    .send({ email: userData.email, password: userData.password });
  authToken = body.token;
  const res = await request(server)
    .post('/api/auth/login')
    .send({ email: userData2.email, password: userData2.password });
  token2 = res.body.token;
});

describe('Category Endpoints', () => {
  it('should create new Category', async () => {
    const { statusCode, body } = await request(server)
      .post('/api/categories')
      .send({ name: 'Test' });
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('category');
  });
  it('should respond with status code if category already exists', async () => {
    const { statusCode, body } = await request(server)
      .post('/api/categories')
      .send({ name: 'Test' });
    expect(statusCode).toEqual(409);
    expect(body).toHaveProperty('status', 'error');
  });
  it('should get list of categories', async () => {
    const { statusCode, body } = await request(server).get('/api/categories');
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('categories');
  });
});
describe('RentItem Endpoints', () => {
  it('should get the list of rent items', async () => {
    const { statusCode, body } = await request(server).get(BaseUrl);
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('message', 'success');
    expect(body).toHaveProperty('rentItems', []);
  });
  it('should response with status code 401 if user is not logged in', async () => {
    const { statusCode } = await request(server)
      .post(BaseUrl)
      .send({});
    expect(statusCode).toEqual(403);
  });
  it('should fail if validation fails', async () => {
    const { statusCode, body } = await request(server)
      .post(BaseUrl)
      .set('Authorization', authToken)
      .send({});
    expect(statusCode).toEqual(422);
    expect(body).toHaveProperty('errors');
  });
  it('should create a new rent item if validation passes', async () => {
    const { statusCode, body } = await request(server)
      .post(BaseUrl)
      .set('Authorization', authToken)
      .send(itemData);
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('item');
  });
  it('should respond with 404 if item does not exist', async () => {
    const { statusCode } = await request(server).get(`${BaseUrl}/10`);
    expect(statusCode).toEqual(404);
  });
  it('should respond with 200 if item exists', async () => {
    const { statusCode } = await request(server).get(`${BaseUrl}/1`);
    expect(statusCode).toEqual(200);
  });

  it("should fail if user attempts to update another use's item", async () => {
    const { statusCode, body } = await request(server)
      .put(`${BaseUrl}/1`)
      .set('Authorization', token2)
      .send({ ...itemData, status: 'rented' });
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('status', 'error');
  });

  it('should fail if the item does not exist', async () => {
    const { statusCode, body } = await request(server)
      .put(`${BaseUrl}/2`)
      .set('Authorization', token2)
      .send({ ...itemData, status: 'rented' });
    expect(statusCode).toEqual(404);
    expect(body).toHaveProperty('status', 'error');
  });

  it('should update the item', async () => {
    const { statusCode, body } = await request(server)
      .put(`${BaseUrl}/1`)
      .set('Authorization', authToken)
      .send({ ...itemData, status: 'rented' });
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('item');
  });

  it("should fail if user attempts to delete another use's item", async () => {
    const { statusCode, body } = await request(server)
      .delete(`${BaseUrl}/1`)
      .set('Authorization', token2);
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('status', 'error');
  });
  it('should delete the item', async () => {
    const { statusCode, body } = await request(server)
      .delete(`${BaseUrl}/1`)
      .set('Authorization', authToken);
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('message');
  });

  it('should get list of items for a given category', async () => {
    const { statusCode, body } = await request(server).get(`${BaseUrl}/1/categories`);
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('category.rentItems');
  });
});
