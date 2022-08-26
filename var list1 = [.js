var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
//let addUser = Object.assign({}, list1[0] , {userName: list1[0].firstName + "" +  list1[0].lastName})
 let addUser = list1.map( x =>  Object.assign({}, x , {userName: x.firstName + "" +  x.lastName}))

console.log(addUser)