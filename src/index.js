let editMode = false
let currentInstruments = false
const orchestraAdapter = new OrchestraAdapter("http://localhost:3000")
const orchestraForm = new OrchestraForm

document.addEventListener("DOMContentLoaded", () => {
    orchestraForm.createForm();
    orchestraAdapter.fetchOrchestras();
    orchestraForm.listenEditDelete();
})


