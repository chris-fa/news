const Post = require('./models/Post');

module.exports = async () => {
  await Post.sync({ force: true });

  const firstPost = await Post.create({
    title: 'First post',
    body: 'Lorem ipsum dolor asimet.',
  });

  // HACKZ: sleep cause I don't know how to manually set updatedAt
  await new Promise(resolve => setTimeout(resolve, 1000));

  const secondPost = await Post.create({
    title: 'Second post',
    body: 'Lorem ipsum dolor asimet 2.',
  });
};
