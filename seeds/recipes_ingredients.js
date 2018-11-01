
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, ing_id: 'rowValue1'},
        {id: 2, ing_id: 'rowValue2'},
        {id: 3, ing_id: 'rowValue3'}
      ]);
    });
};
