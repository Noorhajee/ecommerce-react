var existing = { a: 1, b: 2, c: 3, e: 7 };
var clone = {};
for (var prop in existing) {
 if (existing.hasOwnProperty(prop)) {
 clone[prop] = existing[prop];
 console.log(clone)
 console.log(existing[prop])
 
 }

}
console.log(clone)