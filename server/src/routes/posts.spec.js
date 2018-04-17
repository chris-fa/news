const request = require('supertest');

const app = require('../app');
const updateDb = require('../update-db');

const api = request(app);

describe('Endpoint /posts', () => {
  beforeAll(async () => await updateDb());
  afterAll(() => app.close());

  describe('GET /posts', () => {
    it('it returns posts sorted by modify date', () => {
      return api.get('/posts')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          const {
            status,
            body: { data }
          } = response;

          const titles = data.map(post => post.title);

          expect(status).toBe(200);
          expect(titles).toEqual([
            'Second post',
            'First post',
          ]);
        });
    });
  });
});
