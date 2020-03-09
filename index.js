// Import stylesheets
import "./style.css";


// var data = [
//   { id: "105", name: "FIAT", active: true, parentId: "1" },
//   { id: "106", name: "AUDI", active: true, parentId: "1" },
//   { id: "107", name: "BMW", active: true, parentId: "1" },
//   { id: "109", name: "RENAULT", active: true, parentId: "1" }
// ];
// data.sort(function(a, b) {
//   return a.id.localeCompare(b.id);
// });
// document.write("<pre>" + JSON.stringify(data, 0, 4) + "</pre>");

var characters = ['Luke', 'Alice', 'Dock', 'Xyz'];
console.log(characters);

// splice (for removing and replacing an element from specific place)

characters.splice(0, 1, 'Ray'); // here 0 is the position, 1 is no of items and 'Ray' is new element
characters.splice(1, 2, 'Kylo');

characters.splice(1, 1, 'CP30', 'R2d3');
console.log(characters);

characters.reverse();
console.log('reverse', characters);

characters.sort();
console.log('sort', characters);
