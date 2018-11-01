exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipe_ingredients', (table) => {
      table.string('id')
      table.string('ing_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipe_ingredients')
  }