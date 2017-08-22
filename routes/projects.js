'use strict';

const router = require('express').Router();
const knex = require('../knex');
const { camelizeKeys } = require('humps');

router.get('/projects', (req, res, next) => {
  knex('projects')
    .orderBy('created_at', 'desc')
    .then((projects) => {
      res.send(camelizeKeys(projects));
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/projects/:id', (req, res, next) => {
  const id = req.params.id;

  knex('projects')
    .where('id', id)
    .first()
    .then((project) => {
      res.send(camelizeKeys(project));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
