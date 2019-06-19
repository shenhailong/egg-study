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


  config.security = {
    csrf: {
      ignoreJSON: true,
    }
  }

  config.jwt = {
    secret: '123456',
    enable: true,
    ignore(ctx) {
      // return true
      // const regs = [/^\/api\/v1/gi]

      // if (regs.some(reg => reg.test(ctx.path))) {
      //   info('[JWT] -> %s', ctx.path)
      //   return true
      // }
      const paths = [
        '/api/v1/signin',
        '/api/v1/signup'
      ]
      if (DEV) {
        const tip = `${chalk.yellow('[ JWT ]')} --> ${
          R.contains(ctx.path, paths)
            ? chalk.green(ctx.path)
            : chalk.red(ctx.path)
        }`
        console.log(tip)
      }
      // info(
      //   '[JWT] -> %s',
      //   R.contains(ctx.path, paths)
      //     ? chalk.green(ctx.path)
      //     : chalk.red(ctx.path)
      // )
      return R.contains(ctx.path, paths)
    }
  }

  config.passportLocal = {
    usernameField: 'email',
    passwordField: 'password'
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
