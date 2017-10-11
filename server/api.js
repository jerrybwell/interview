(function () {
  const express = require('express');
  const router = express.Router();
  const has = Object.prototype.hasOwnProperty;

  router.use(function timeLog(req, res, next) {
    next();
  });

  router.get('/', (req, res) => {
    res.send('try something else');
  });

  router.get('/treeData', (req, res) => {
    setTimeout(() => {
      returnData = { "msg": "", "code": 0, "data": { "tree": [{ "description": "", "id": 44, "parent": null, "name": "1" }, { "description": "", "id": 45, "parent": null, "name": "2" }, { "description": "", "id": 46, "parent": null, "name": "3" }, { "description": "", "id": 47, "parent": 44, "name": "1-1" }, { "description": "", "id": 48, "parent": 47, "name": "1-1-1" }, { "description": "", "id": 49, "parent": 48, "name": "1-1-1-1" }, { "description": "", "id": 50, "parent": 45, "name": "2-1" }, { "description": "", "id": 51, "parent": 47, "name": "1-2" }, { "description": "", "id": 52, "parent": 50, "name": "2-2" }, { "description": "", "id": 53, "parent": 50, "name": "2-1-1" }] }, "api_version": "1.0" }

      res.send(returnData);
    }, 1000);
  });

  module.exports = router;
})();
