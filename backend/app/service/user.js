const { Service } = require('egg');

class UserSerVice extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    this.tableName = 'User'; // 数据库表名。
    this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
  }

  async getAll() {
    return await this.database.findAll();
  }

  async create(payload) {
    const { ctx } = this;
    const { name, mobile, password } = payload;
    const _password = await ctx.genHash(password);
    return await this.database.create({
      name,
      mobile,
      password: _password,
    });
  }

  // 根据用户手机号查询用户信息
  async findByMobile(mobile) {
    return await this.database.findOne({
      where: { mobile },
    });
  }

  // 根据用户id查询用户信息
  async findById(id) {
    return await this.database.findByPk(id);
  }

  async delete(id) {
    const { ctx } = this;
    const user = await this.database.findByPk(id);
    if (!user) {
      ctx.throw(400, 'not found user');
    }
    // 存在用户
    // await user.destroy();
    return await this.database.destroy({
      where: {
        id: user.id,
      },
    });
  }
}

module.exports = UserSerVice;
