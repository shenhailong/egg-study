'use strict'

class HomeController extends Controller {
  async index() {
    console.log("home")
    this.ctx.type = 'json'
    this.ctx.body = this.ctx.state
  }
}

module.exports = HomeController
