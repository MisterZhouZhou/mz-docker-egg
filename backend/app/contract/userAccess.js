/*
 * @Author: misterzhou
 * @Date: 2022-07-14 15:19:27
 * @LastEditTime: 2022-07-14 16:39:47
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/contract/userAccess.js
 * @Description:
 */
module.exports = {
  loginRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '手机号',
      example: '13500000001',
      format: /^1[34578]\d{9}$/,
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '123',
    },
  },
};
