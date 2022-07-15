/*
 * @Author: misterzhou
 * @Date: 2022-07-14 12:41:22
 * @LastEditTime: 2022-07-14 13:01:44
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/service/actionToken.js
 * @Description: 生成token service
 */
const { Service } = require('egg');

class ActionTokenService extends Service {
  async apply(id) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: {
        id,
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;
