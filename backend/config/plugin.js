'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 配置 egg-swagger-doc 插件信息
  // 访问地址: http://127.0.0.1:7000/swagger-ui.html
  swaggerdoc: {
    enable: true, // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
  // 请求数据验证
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // 数据加密
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt',
  },
  // jwt鉴权
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
