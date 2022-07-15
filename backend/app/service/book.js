/*
 * @Author: misterzhou
 * @Date: 2022-07-13 10:33:08
 * @LastEditTime: 2022-07-14 10:41:46
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app/service/book.js
 * @Description: book service
 */
const { Service } = require('egg');

class BookSerVice extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    this.tableName = 'Books'; // 数据库表名, 驼峰命名规则，这里首字母大写
    this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
  }

  async getAll() {
    return await this.database.findAll();
  }

  // 根据Id获取表信息
  async selectById(id) {
    const book = await this.database.findByPk(id);
    console.log('========', id, '-----', typeof id, '----', book, '---', book[0]);
    return book;
  }
}

module.exports = BookSerVice;
