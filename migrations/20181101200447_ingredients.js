

exports.up = (knex, Promise) => {
    return knex.schema.createTable('ingredients', (table) => {
      table.increments('ing_id').primary()
      table.string('ing_name')
      table.string('type')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('ingredients')
}