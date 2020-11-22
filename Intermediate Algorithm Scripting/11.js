/*
    FCC Version - 7.0
    Convert HTML Entities
    Task - 11 / 21
*/

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str
    .split("")
    .map((entity) => entities[entity] || entity)
    .join("");
}

convertHTML("Dolce & Gabbana");
