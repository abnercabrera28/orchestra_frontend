document.addEventListener("DOMContentLoaded", () => {
    createForm();
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

function createForm() {
    const formContainer = document.getElementById("form-container")
    const form = document.createElement("form")
    form.innerHTML = `<input id="name-input" placeholder="Name" type="text"/><br><input id="submit" value="Create Orchestra" type="submit"/>`
    formContainer.append(form)
}