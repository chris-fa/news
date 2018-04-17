const request = require('supertest');

const app = require('../app');

describe('Endpoints', () => {
  afterAll(() => app.close());

  it('It should return server version on GET /about', async () => {
    const response = await request(app).get('/about');

    const { status, body } = response;

    expect(status).toEqual(200);
    expect(body.version).toEqual(process.env.npm_package_version);
  });
});
