const peoples = ["krishna", "huxn", "harkira"];
const res1 = peoples.every((people) => people.length > 4); // same as "AND" operator condition
const res2 = peoples.some((people) => people.length > 4); //  same as "OR" operator conditon
console.log(res1);
console.log(res2);
