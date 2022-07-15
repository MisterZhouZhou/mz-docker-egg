const { Controller } = require('egg');

/**
 * @controller 授权模块 授权相关Api
 */
class UserAccessController extends Controller {
  /**
	 * @summary 登录
	 * @description 登录
	 * @router post /auth/login
	 * @request body loginRequest *body (DTO)
	 * @response 200 baseResponse 删除成功
	 */
  async login() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    // 校验参数
    ctx.validate(ctx.rule.loginRequest);
    // 登录
    const res = await service.userAccess.login(payload);
    return ctx.helper.success({ ctx, res });
  }

  /**
	 * @summary 退出登录
	 * @description 退出登录
	 * @router post /auth/logout
	 * @response 200 baseResponse 删除成功
	 */
  async logout() {
    const { ctx, service } = this;
    await service.userAccess.logout();
    return ctx.header.success({ ctx });
  }
}

module.exports = UserAccessController;
