import model from '../models';

const { Result } = model;

class Results {
  static create(req, res) {
    const { status, findings, repositoryName, queuedAt, scanningAt, finishedAt } = req.body

    return Result
      .create({
        status,
        findings,
        repositoryName,
        queuedAt,
        scanningAt,
        finishedAt
      })
      .then(resultData => res.status(201).send({
        success: true,
        message: 'Result successfully created',
        resultData
      }))
      .catch(error => res.status(422).send({
        success: false,
        message: 'something went wrong, please make sure parameters are correct',
        error
      }))
  }

  static listing(req, res) {
    const page = req.query.page ? parseInt(req.query.page) : 0

    return Result
      .findAll({
        order: [['id', 'DESC']],
        offset: page*20,
        limit: 20
      })
      .then(results => res.status(200).send({
        results
      }));
  }
}

export default Results;
