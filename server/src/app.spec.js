const request = require('supertest');

const app = require('./app');

describe('Endpoints', () => {
  test('It should return server version on GET /about', async () => {
    const response = await request(app).get('/about');

    const { status, body } = response;

    expect(status).toBe(200);
    expect(body.version).toBe(process.env.npm_package_version);
  });
});
