// Register the service worker
console.log("Here in background.js before anything starts");
console.log("Here in background.js - outside registry");

alert("On this website. Automatically generating a popup");

const buildingTitle = document.querySelector(".building-title");
const buildingAddress = buildingTitle.querySelector(".incognito").textContent;
console.log("building address = " + buildingAddress);

// document.getElementById("main-info").addEventListener('click', () => {
//     console.log("Popup DOM fully loaded and parsed");
// });

// "matches": ["https://*.streeteasy.com/*"],

const searchValue = "620 EAST 20 STREET, MANHATTAN"; // Replace with your chosen value

// Select the search form and input element
// const searchForm = document.querySelector('.search-form');
// const searchInput = searchForm.querySelector('.search-input');

// // Set the value of the search input element
// searchInput.value = searchValue;

// // Submit the search form
// searchForm.submit();

// // Wait for the search results page to load and retrieve the HTML content
// setTimeout(() => {
//   fetch(window.location.href)
//     .then(response => response.text())
//     .then(data => console.log(data));
// }, 5000); // Adjust the timeout value as needed

// fetch('https://whoownswhat.justfix.org/en/address/MANHATTAN/620/EAST%2020%20STREET')
//   .then(response => response.text())
//   .then(data => {
//     const html = new DOMParser().parseFromString(data, 'text/html');
//     const addressField = html.querySelector('.property-address');
//     const addressValue = addressField.querySelector('.property-value').textContent.trim();
//     console.log(addressValue);
//   });

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const url =
  "https://whoownswhat.justfix.org/en/address/MANHATTAN/620/EAST%2020%20STREET";

fetch(proxyUrl + url)
  .then((response) => response.text())
  .then((data) => {
    // console.log(data);
    // console.log("\n\n\n\n");
    const html = new DOMParser().parseFromString(data, "text/html");
    console.log(html);
    const addressField = html.querySelector(".columns main-content-columns");
    console.log(addressField);
  })
  .catch((error) => console.error(error));
