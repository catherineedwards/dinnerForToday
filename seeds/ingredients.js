
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ing_id: 1, ing_name: 'Duck', type: 'Meat'},
        {ing_id: 2, ing_name: 'Duck fat', type: 'Meat'},
        {ing_id: 3, ing_name: 'White beans', type: 'Dry goods'},
        {ing_id: 4, ing_name: 'Herbs', type: 'Fresh'},
        {ing_id: 5, ing_name: 'Garlic', type: 'Fresh'},
        {ing_id: 6, ing_name: 'Chicken', type: 'Meat'},
        {ing_id: 7, ing_name: 'Carrot', type: 'Fresh'},
        {ing_id: 8, ing_name: 'Potato', type: 'Fresh'},
        {ing_id: 9, ing_name: 'Gravy', type: 'Dry goods'},
        {ing_id: 10, ing_name: 'Frozen Peas', type: 'Frozen'},
        {ing_id: 11, ing_name: 'Beef', type: 'Meat'},
        {ing_id: 12, ing_name: 'Red Wine', type: 'Liquor'},
        {ing_id: 13, ing_name: 'Beef Stock', type: 'Fresh'},
        {ing_id: 14, ing_name: 'Onion', type: 'Fresh'}
      ]);
    });
};
