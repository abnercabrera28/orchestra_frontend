document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchOrchestras();
})

function fetchOrchestras() {
    const orchestrasContainer = document.getElementById("orchestras-container")
    
    fetch("http://localhost:3000/orchestras")
    .then(r => r.json())
    .then(info => {
        info.forEach(addOrchestra)
    })
    .catch(err => console.warn(err))
}

function createForm() {
    const formContainer = document.getElementById("form-container")
    const form = document.createElement("form")
    form.innerHTML = `<input id="name-input" placeholder="Name" type="text"/><br><input id="submit" value="Create Orchestra" type="submit"/>`
    formContainer.append(form)

    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault()
    const name = event.target[0]

    fetch("http://localhost:3000/orchestras", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: name.value
        })
    })
    .then(r => r.json())
    .then(info => { 
        console.log(info)
        if (info.status === 201) {
            //
        } else {
            alert(info.errors)
        }
        name.value = ""
})
    .catch(err => console.warn(err))
}

function addOrchestra(orchestra) {
    const orchestrasContainer = document.getElementById("orchestras-container")
    orchestrasContainer.innerHTML += `<li>${orchestra.name}</li>`
}