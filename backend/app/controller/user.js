/* eslint-disable jsdoc/check-tag-names */
const { Controller } = require('egg');

/**
 * @controller 用户模块 用户相关Api
 */
class UserController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'user';
  // }

  /**
	 * @summary 获取用户记录
	 * @description 获取用户记录
	 * @router get /api/user/list
	 * @response 200 baseResponse 用户记录
	 */
  async list() {
    const { ctx } = this;
    const res = await ctx.service.user.getAll();
    ctx.helper.success({ ctx, res });
  }

  /**
	 * @summary 获取用户信息
	 * @description 获取用户信息
	 * @router get /api/user/{id}
	 * @request path integer id 用户id
	 * @response 200 baseResponse 用户信息
	 */
  async searchById() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.user.getById(id);
    ctx.helper.success({ ctx, res });
  }

  /**
	 * @summary 创建用户
	 * @description 创建用户
	 * @router post /api/user/create
	 * @request body createRequest *body (DTO)
	 * @response 200 baseResponse 用户信息 (DTO)
	 */
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createRequest);
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  /**
	 * @summary 根据用户id删除用户
	 * @description 根据用户id删除用户
	 * @router post /api/user/delete
	 * @request body deleteRequest *body (DTO)
	 * @response 200 baseResponse 删除成功
	 */
  async delete() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.deleteRequest);
    // 组装参数
    const { id } = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.delete(id);
    if (res) {
      // 设置响应内容和响应状态码
      ctx.helper.success({ ctx, res });
    }
  }
}

module.exports = UserController;
