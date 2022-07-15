/* eslint-disable jsdoc/check-tag-names */
/*
 * @Author: misterzhou
 * @Date: 2022-07-13 10:33:42
 * @LastEditTime: 2022-07-14 10:41:44
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/controller/book.js
 * @Description: book controller
 */
const { Controller } = require('egg');

/**
 ** @controller 书籍模块 书籍相关Api
 */
class BookController extends Controller {
  /**
	 * @summary 书籍记录
	 * @description 书籍记录
	 * @router get /api/book/list
	 * @response 200 baseResponse 返回结果
	 */
  async list() {
    const { ctx } = this;
    const res = await ctx.service.book.getAll();
    ctx.helper.success({ ctx, res });
  }

  /**
	 * @summary 根据书籍id查询信息
	 * @description 根据书籍id查询信息
	 * @router get /api/book/selectById
	 * @request query integer id 书籍id
	 * @response 200 baseResponse 返回结果
	 */
  async selectById() {
    const ctx = this.ctx; // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
    const param = ctx.query; // 获取请求参数
    // 等价于this.ctx.service
    const result = await this.service.book.selectById(param.id); // 查找 service/book.js 下的 selectById 方法
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, result });
  }
}

module.exports = BookController;
