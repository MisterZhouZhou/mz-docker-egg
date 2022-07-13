'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.get('/user/list', controller.user.list);
  router.get('/user/hello', controller.user.hello);
  router.post('/user/create', controller.user.create);
  router.post('/user/delete', controller.user.delete);
  router.get('/book/list', controller.book.list);
  router.get('/book/selectById', controller.book.selectById);
};
