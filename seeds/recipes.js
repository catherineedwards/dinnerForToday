
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Confit Duck'},
        {id: 2, recipe_name: 'Roast Chicken'},
        {id: 3, recipe_name: 'Beef Stew'}
      ]);
    });
};
