const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('returns the right route with the corrosponding id', () => {
  // One for each letter of the alphabet!
  const expected = (`${recipe}`)
  return db.getUsers(testDb)
    .then(users => {
      const actual = recipe.id (corrosponding id)
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('returns an added  ingredient', () => {
  const expected = 'Lamb'
  return db.addingredient(ID and lamb, testDb)
    .then(user => {
      const actual =  ingredient.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('returns an updated ingredient', () => {
  const expected = 'Lamb'
  return db.updateshoppinglist(ingredient)
    .then(user => {
      const actual =  ingredient.name(updated)
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
test('deletes an ingredient', () => {
  const expected = 'null'
  return db.(ingredient)
    .then(user => {
      const actual =  ingredient.name(updated)
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
test('????', () => {
  const expected = 'null'
  return db.(ingredient)
    .then(user => {
      const actual =  ingredient.name(updated)
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

