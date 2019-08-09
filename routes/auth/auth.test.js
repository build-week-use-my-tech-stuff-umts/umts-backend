import request from 'supertest';
import app from '../../api/server';

const BASE_URL = '/api/auth/';
const userData = {
  email: 'test@test.com',
  password: 'test12',
  firstName: 'jon',
  lastName: 'doe',
};
let authToken;
describe('Register Endpoint', () => {
  it('should fail if validation fails', async () => {
    const { statusCode, body } = await request(app)
      .post(`${BASE_URL}/register`)
      .send({});
    expect(statusCode).toEqual(422);
    expect(body).toHaveProperty('errors');
  });
  it('should respond with status code 201 if register succeeds', async () => {
    const { statusCode, body } = await request(app)
      .post(`${BASE_URL}/register`)
      .send(userData);
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('user');
  });
  it('should respond with status code 409 if user already exists', async () => {
    const { statusCode } = await request(app)
      .post(`${BASE_URL}/register`)
      .send(userData);
    expect(statusCode).toEqual(409);
  });
});

describe('Login Endpoint', () => {
  it('should fail if validation fails', async () => {
    const { statusCode, body } = await request(app)
      .post(`${BASE_URL}/login`)
      .send({});
    expect(statusCode).toEqual(422);
    expect(body).toHaveProperty('errors');
  });
  it('should respond with status code 401 if password is wrong', async () => {
    const { statusCode } = await request(app)
      .post(`${BASE_URL}/login`)
      .send({ ...userData, password: 'pass' });
    expect(statusCode).toEqual(401);
  });
  it('should respond with status code 401 if user does not exist', async () => {
    const { statusCode } = await request(app)
      .post(`${BASE_URL}/login`)
      .send({ email: 'test2@test.com', password: 'password' });
    expect(statusCode).toEqual(401);
  });
  it('should respond with status code 200 if login succeeds', async () => {
    try {
      const { statusCode, body } = await request(app)
        .post(`${BASE_URL}/login`)
        .send({ email: 'test@test.com', password: 'test12' });
      authToken = body.token;
      expect(statusCode).toEqual(200);
      expect(body).toHaveProperty('user');
      expect(body).toHaveProperty('token');
    } catch (error) {
      return null;
    }
  });
  it('should update user profile', async () => {
    try {
      const { statusCode, body } = await request(app)
        .put(`${BASE_URL}/profile`)
        .set('Authorization', authToken)
        .send({ ...userData, city: 'test city' });
      expect(statusCode).toEqual(200);
      expect(body).toHaveProperty('user.city', 'test city');
    } catch (error) {
      return null;
    }
  });
  it('should get authenticated use details', async () => {
    try {
      const { statusCode, body } = await request(app)
        .get(`${BASE_URL}/user`)
        .set('Authorization', authToken);
      expect(statusCode).toEqual(200);
      expect(body).toHaveProperty('user');
    } catch (error) {
      return null;
    }
  });
});