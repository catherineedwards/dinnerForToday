
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, ing_id: '1'},
        {id: 1, ing_id: '2'},
        {id: 1, ing_id: '3'},
        {id: 1, ing_id: '4'},
        {id: 1, ing_id: '5'},
        {id: 2, ing_id: '6'},
        {id: 2, ing_id: '8'},
        {id: 2, ing_id: '9'},
        {id: 2, ing_id: '10'},
        {id: 2, ing_id: '4'},
        {id: 2, ing_id: '5'},
        {id: 3, ing_id: '7'},
        {id: 3, ing_id: '11'},
        {id: 3, ing_id: '12'},
        {id: 3, ing_id: '14'},
        {id: 3, ing_id: '10'},
        {id: 3, ing_id: '4'},
        {id: 3, ing_id: '5'},
        {id: 3, ing_id: '8'}
      ]);
    });
};
