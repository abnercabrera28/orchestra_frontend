let editMode = false
let currentInstruments = false
const orchestraAdapter = new OrchestraAdapter("http://localhost:3000")
const orchestraForm = new OrchestraForm

document.addEventListener("DOMContentLoaded", () => {
    orchestraForm.createForm();
    orchestraAdapter.fetchOrchestras();
    orchestraForm.listenEditDelete();
    searchOrchestra();
})


function searchOrchestra() {

    const form = document.getElementById("search")
    form.addEventListener("submit", handleSearch)
}

function handleSearch(event) {
    event.preventDefault()
    const input = event.target[0].value
    const result = Orchestra.all.find(orchestra => orchestra.name == input)
    console.log(result.name)

    const formContainer = document.getElementById("form-container")
    formContainer.innerHTML += `${result.name}`

}
