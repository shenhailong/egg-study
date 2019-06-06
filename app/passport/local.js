'use strict'
const R = require('ramda')
module.exports = async (ctx, { username, password }) => {
  const email = username
  await ctx.verify('user.signin', 'body')
  const user = await ctx.model.User.Auth(email, password)
  ctx.assert(user, 400, '用户或密码错误')
  const raw_user = R.omit(
    ['password', 'created_at', 'updated_at'],
    user.toJSON()
  )
  ctx.logger.info(raw_user)
  const token = await ctx.sign_token(raw_user, ctx.request.body.remember_me)
  ctx.body = token
  return token
}

if(!user){
  ctx.throw(400, '用户名或者密码错误')
}

ctx.assert(user, 400, '用户名或者密码错误')
