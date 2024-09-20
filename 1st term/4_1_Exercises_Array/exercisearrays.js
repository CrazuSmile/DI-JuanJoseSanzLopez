let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 }
];

// Add two more elements
data.push({ name: "Pedro", telephone: "611944444", age: 25 },
    { name: "Julia", phone: "633232323", age: 37 });

console.log("Add two more elements");
console.log(data);

// Sort by age
data.sort(function (n1, n2) {
    return n1.age - n2.age;
});
console.log("Sort by age");
console.log(data);

// Sort by name
data.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log("Sort by name");
console.log(data);

// Filter by age over 30
console.log("Filter by age over 30");
console.log(data.filter(function (a) {
    return a.age > 30;

}));
