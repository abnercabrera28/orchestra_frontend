class OrchestraForm {
    createForm() {
        const formContainer = document.getElementById("form-container")
        const form = document.createElement("form")
        form.innerHTML = `<input id="name-input" placeholder="Name" type="text"/><br><input id="orchestra-submit" value="Create Orchestra" type="submit"/>`
        formContainer.append(form)
    
        form.addEventListener("submit", handleSubmit)
    }

    handleSubmit(event) {
        event.preventDefault()
        const name = event.target[0]
        if (editMode) {
            orchestraAdapter.editOrchestra(editMode, name)
        } else {
            orchestraAdapter.createOrchestra(name)
        }
    }
}