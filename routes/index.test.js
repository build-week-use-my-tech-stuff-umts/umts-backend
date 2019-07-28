import request from 'supertest';
import server from '../api/server';

describe('Server [GET /api]', () => {
  it('should respond with status code 200 if server is running', async () => {
    const { statusCode } = await request(server).get('/api');
    expect(statusCode).toEqual(200);
  });
});
