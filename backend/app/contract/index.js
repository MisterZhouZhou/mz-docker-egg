/*
 * @Author: misterzhou
 * @Date: 2022-07-13 12:45:27
 * @LastEditTime: 2022-07-13 14:59:02
 * @LastEditors: misterzhou
 * @FilePath: /mz-egg/backend/app/contract/index.js
 * @Description: swagger数据展示、数据验证
 */
module.exports = {
  baseRequest: {
    id: { type: 'string', description: 'id 唯一键', required: true, example: '1' },
  },
  baseResponse: {
    code: { type: 'integer', required: true, example: 0 },
    data: { type: 'string', example: '请求成功' },
    errorMessage: { type: 'string', example: '请求成功' },
  },
};
