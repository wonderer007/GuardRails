import Results from '../controllers/result';

export default (app) => {
  app.get('/api/results', Results.listing);
  app.post('/api/results', Results.create);
};
