class OrchestraForm {
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditDelete = this.handleEditDelete.bind(this)
    }

    createForm() {
        const formContainer = document.getElementById("form-container")
        const form = document.createElement("form")
        form.innerHTML = `<input id="name-input" placeholder="Name" type="text"/><br><input id="orchestra-submit" value="Create Orchestra" type="submit"/>`
        formContainer.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
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

    listenEditDelete() {
        const orchestrasContainer = document.getElementById("orchestras-container")
        orchestrasContainer.addEventListener("click", this.handleEditDelete)
    }

    handleEditDelete(event) {
        const li = event.target.parentElement
        if (event.target.dataset.action === "delete") {
            orchestraAdapter.deleteOrchestra(li)
        } else if (event.target.dataset.action === "edit") {
            editMode = li
            document.getElementById("orchestra-submit").value = "Update"
            document.getElementById("name-input").value = li.children[0].innerText
        }
    }
}