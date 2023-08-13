const cloneArr = require('./cloneArray')


test('properly clones arrays',() =>{
  const array = [1,2,3]
  expect(cloneArr(array)).toEqual(array)
})