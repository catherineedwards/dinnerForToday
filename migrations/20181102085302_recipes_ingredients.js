exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes_ingredients', (table) => {
      table.string('id')
      table.string('ing_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipes_ingredients')
}