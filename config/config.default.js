/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558330166765_2905';

  // add your middleware config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '12345678'
  }

  config.flash = {
    key: Symbol.for('flash')
  }

  config.validator = {
    open: 'zh-CN',
    languages: {
      'zh-CN': {
        required: '必须填 %s 字段'
      }
    },
    async formatter(ctx, error) {
      info('[egg-y-validator] -> %s', JSON.stringify(error, ' '))
      throw new Error(error[0].message)
    }
  }

  // config.validator = {
  //   open: 'zh-CN',
  //   languages: {
  //     'zh-CN': {
  //       required: '必须填 %s 字段'
  //     }
  //   },
  //   async formate(ctx, error) {
  //     console.log(error)
  //     ctx.type = 'json'
  //     ctx.status = 400
  //     ctx.body = error
  //   }
  // }

  config.security = {
    csrf: {
      ignoreJSON: true,
    }
  }

  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
