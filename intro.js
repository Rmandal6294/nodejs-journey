console.log("My name is Ranit mandal");
console.log("My favorite language is javascript");

const today = new Date();
const option = {year : 'numeric', month: 'long', day: 'numeric'};
const formattedDate = today.toLocaleDateString("En-In", option);
console.log("Today date is "+ formattedDate);