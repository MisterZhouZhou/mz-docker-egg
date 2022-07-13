const { Service } = require('egg');

class UserSerVice extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    this.tableName = 'Users'; // 数据库表名。
    this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
  }

  async getAll() {
    return await this.database.findAll();
  }

  async create(payload) {
    const { name } = payload;
    return await this.database.create({
      name,
    });
  }

  async delete(id) {
    const { ctx } = this;
    const user = await this.database.findByPk(id);
    if (!user) {
      return this.ctx.helper.failed({ ctx, code: 400, msg: 'not found user' });
    }
    // 存在用户
    return await this.database.destroy({
      where: {
        id: user.id,
      },
    });
  }
}

module.exports = UserSerVice;
