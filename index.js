// Import stylesheets
import "./style.css";

var data = [
  { id: "105", name: "FIAT", active: true, parentId: "1" },
  { id: "106", name: "AUDI", active: true, parentId: "1" },
  { id: "107", name: "BMW", active: true, parentId: "1" },
  { id: "109", name: "RENAULT", active: true, parentId: "1" }
];
data.sort(function(a, b) {
  return a.id.localeCompare(b.id);
});
document.write("<pre>" + JSON.stringify(data, 0, 4) + "</pre>");
