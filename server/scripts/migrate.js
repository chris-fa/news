const db = require('../src/db');
const updateDb = require('../src/update-db');

updateDb()
  .then(() => db.close());
