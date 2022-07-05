// Code here
document.addEventListener("DomContentLoaded", () => {
    fetchData();
})

// Fetch Beers
function fetchData() {
    fetch("http://localhost:3000/beers")
    .then((resp) => resp.json())
    .then((data) => renderBeers(data))
}