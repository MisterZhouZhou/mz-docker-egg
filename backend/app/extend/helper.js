/*
 * @Author: misterzhou
 * @Date: 2022-07-13 13:27:29
 * @LastEditTime: 2022-07-13 13:37:23
 * @LastEditors: misterzhou
 * @FilePath: /mz-egg/backend/app/extend/helper.js
 * @Description: helper ctx.helper
 */
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.status = 200;
  ctx.body = {
    code: 200,
    data: res,
    msg,
  };
};

exports.failed = ({ ctx, code = 500, msg = '请求成功' }) => {
  ctx.status = code;
  ctx.body = {
    code,
    msg,
  };
};
