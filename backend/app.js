/*
 * @Author: misterzhou
 * @Date: 2022-07-14 11:37:47
 * @LastEditTime: 2022-07-14 16:13:29
 * @LastEditors: misterzhou
 * @FilePath: /mz-docker-egg/backend/app.js
 * @Description: app 生命周期钩子
 */
// 初始化启动项目
class AppBootHook {
  constructor(app) {
    this.app = app;
    app.root_path = __dirname;
  }

  configWillLoad() {}

  configDidLoad() {}

  async didLoad() {
    // All files have loaded, start plugin here.
    console.log('\x1B[32m%s\x1b[0m', '----- didLoad -----');
  }

  async willReady() {
    console.log('\x1B[32m%s\x1b[0m', '----- willReady -----');
  }

  async didReady() {
    console.log('\x1B[32m%s\x1b[0m', '----- didReady -----');
    // 在此处可以初始化数据
    console.log('================= Init Data ==================');
    const ctx = await this.app.createAnonymousContext();
    // 删除Users表
    await ctx.model.User.sync({ force: true });
    // 新增字段
    // ctx.model.Users.password2 = 123;
    await ctx.service.user.create({
      name: 'mz',
      mobile: '13500000001',
      password: '123456',
    });
  }

  async serverDidReady() {
    console.log('\x1B[32m%s\x1b[0m', '----- serverDidReady -----');
  }
  async beforeClose() {
    console.log('\x1B[32m%s\x1b[0m', '----- beforeClose -----');
  }
}
module.exports = AppBootHook;
