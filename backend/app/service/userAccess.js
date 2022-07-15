/*
 * @Author: misterzhou
 * @Date: 2022-07-14 12:48:23
 * @LastEditTime: 2022-07-14 17:06:20
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/service/userAccess.js
 * @Description: 用户授权
 */
const { Service } = require('egg');

class UserAccessService extends Service {
  // 登录授权
  async login(payload) {
    const { ctx, service } = this;
    const { mobile, password } = payload;
    const user = await service.user.findByMobile(mobile);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    const verifyPsw = await ctx.compare(password.toString(), user.password);
    if (!verifyPsw) {
      ctx.throw(404, 'user password is error');
    }
    return {
      token: await service.actionToken.apply(user.id),
    };
  }
  // 返回当前用户
  async current() {
    const { ctx, service } = this;
    const id = ctx.state.user.data.id;
    const user = await service.user.findById(id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    user.password = '';
    return user;
  }

  // 退出登录
  async logout() {
    const { ctx } = this;
    ctx.state.user = null;
  }
}

module.exports = UserAccessService;
