const { addNoteHandler } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    routes: {
    cors: {
      origin: ['*'],
    },
  },
  },
];

module.exports = routes;