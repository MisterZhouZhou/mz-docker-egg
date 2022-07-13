/*
 * @Author: misterzhou
 * @Date: 2022-07-13 14:42:38
 * @LastEditTime: 2022-07-13 14:47:21
 * @LastEditors: misterzhou
 * @FilePath: /mz-egg/backend/app/middleware/error_handle.js
 * @Description: 异常拦截
 */
'use strict';
module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next(); // 没有错误直接放过
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', err, this);
      const status = err.status || 500;
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        code: status,
        // 服务端自身的处理逻辑错误(包含框架错误500 及 自定义业务逻辑 错误533开始 )
        // 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
        error,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = 200;
    }
  };
};
