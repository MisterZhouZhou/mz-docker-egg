/*
 * @Author: misterzhou
 * @Date: 2022-07-13 10:33:42
 * @LastEditTime: 2022-07-13 15:18:08
 * @LastEditors: misterzhou
 * @FilePath: /mz-egg/backend/app/controller/book.js
 * @Description: book controller
 */
const { Controller } = require('egg');

/**
 ** @controller zzz 书籍相关Api
 */
class BookController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'book';
  }

  async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.book.getAll();
  }

  /**
	 * @summary 根据书籍id查询信息
	 * @description 根据书籍id查询信息
	 * @router get /book/selectById
	 * @request query integer Id 书籍id
	 * @response 200 baseResponse 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
	 */
  async selectById() {
    const ctx = this.ctx; // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
    const param = ctx.query; // 获取请求参数。
    // 等价于this.ctx.service
    const result = await this.service.book.selectById(param.Id); // 查找 service/book.js 下的 selectById 方法。
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, result });
  }
}

module.exports = BookController;
