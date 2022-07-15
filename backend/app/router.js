'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/user', controller.user.index);
  // router.get('/user/list', controller.user.list);
  // router.get('/user/hello', controller.user.hello);
  // router.post('/user/create', controller.user.create);
  // router.post('/user/delete', controller.user.delete);
  // router.get('/book/list', controller.book.list);
  // router.get('/book/selectById', controller.book.selectById);

  // 鉴权第一种方式
  // const { router, controller， jwt } = app;
  /*
  * 这里的第二个对象不再是控制器，而是 jwt 验证对象，第三个地方才是控制器
  * 只有在需要验证 token 的路由才需要第二个 是 jwt 否则第二个对象为控制器
  **/
  // router.post('/admin',jwt, controller.admin.index);
};
