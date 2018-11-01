exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) => {
      table.increments('id').primary()
      table.string('recipe_name')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipes')
  }
  