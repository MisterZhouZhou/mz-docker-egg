/*
 * @Author: misterzhou
 * @Date: 2022-07-13 13:10:28
 * @LastEditTime: 2022-07-13 14:57:19
 * @LastEditors: misterzhou
 * @FilePath: /mz-egg/backend/app/contract/user.js
 * @Description: user 请求、响应校验规则
 */
module.exports = {
  createRequest: {
    name: {
      type: 'string',
      required: true,
      description: '用户名',
      example: 'name',
    },
    mobile: {
      type: 'string',
      required: true,
      description: '手机号',
      example: '18801731528',
      format: /^1[34578]\d{9}$/,
    },
  },
  loginRequest: {
    name: {
      type: 'string',
      required: true,
      description: '用户名',
      example: 'admin',
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '123',
    },
  },
  deleteRequest: {
    id: {
      type: 'integer',
      required: true,
      description: '用户id',
      example: 1,
    },
  },
};
