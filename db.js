const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRecipes: getRecipes
}



  function getRecipes(testConn) {
    const conn = testConn || connection
    return conn('recipes').select()
  }
