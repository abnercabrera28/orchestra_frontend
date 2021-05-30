document.addEventListener("DOMContentLoaded", () => {
    fetchOrchestras();
})

function fetchOrchestras() {
    const orchestrasContainer = document.getElementById("orchestras-container")
    
    fetch("http://localhost:3000/orchestras")
    .then(r => r.json())
    .then(info => {
        info.forEach(orchestra => {
            orchestrasContainer.innerHTML += `<li>${orchestra.name}</li>`
        })
    })
    .catch(err => console.warn(err))
}