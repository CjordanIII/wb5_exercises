"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?

const actor = academyMembers.find((member) => member.memID === 187);

console.log("Who is the Academy Member whose ID is 187?==>>>", actor.name);

// Who has been in at least 3 films?

const atLeast3Films = academyMembers.filter(
  (member) => member.films.length >= 3
);

console.log(
  "Who has been in at least 3 films?==>>>",
  ...atLeast3Films.map((member) => member.name + ",")
);

// Who has a name that starts with "Bob"?

const actorsName = academyMembers.filter((member) =>
  member.name.startsWith("Bob")
);

console.log(
  "Who has a name that starts with 'Bob'?==>>>",
  ...actorsName.map((member) => member.name + ",")
);

// HARDER: Which Academy Members have been in a film
// that starts with "A"

const filmStartWithA = academyMembers.filter((member) =>
  // test to see if anything in the array has a returns true if so
  member.films.some((film) => film.startsWith("A"))
);

console.log(
  "Which Academy Members have been in a film that starts with 'A'?==>>>",
  ...filmStartWithA.map((member) => member.name + ",")
);
