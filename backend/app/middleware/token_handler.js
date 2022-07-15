/*
 * @Author: misterzhou
 * @Date: 2022-07-14 17:37:03
 * @LastEditTime: 2022-07-14 18:06:34
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/middleware/token_handler.js
 * @Description: token鉴权
 */

'use strict';
module.exports = options => {
  return async function(ctx, next) {
    console.log('header===', ctx.request.header);
    const token = ctx.request.header.authorization;
    let decode = '';
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);// 验证token
        console.log('decode======>', decode);
        // 获取用户信息
        ctx.decode = decode;
      } catch (error) {
        ctx.throw(401, error.message);
      }
      // 切记先解析token并存储数据后再执行回调，否则解析数据获取不到
      await next();
    } else {
      ctx.throw(401, '登录超时，请先登录');
    }
  };
};
