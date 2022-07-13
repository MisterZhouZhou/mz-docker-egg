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
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};
