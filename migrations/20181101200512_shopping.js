exports.up = (knex, Promise) => {
    return knex.schema.createTable('shopping_list', (table) => {
      table.increments('item_id').primary()
      table.string('item_name')
      table.string('item_location')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shopping_list')
}