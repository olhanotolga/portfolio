// adds current year in the footer

let date = new Date();
let curYear = date.getFullYear();
const displayedYear = document.getElementById("year");

displayedYear.innerHTML = curYear;

