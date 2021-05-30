document.addEventListener("DOMContentLoaded", () => {
    fetchOrchestras;
})

function fetchOrchestras() {
    fetch("http://localhost:3000/orchestras")
    .then(r => r.json())
    .then(info => console.log(info))
    .catch(err => console.warn(err))
}