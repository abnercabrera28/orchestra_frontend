class OrchestraAdapter {

    constructor(orchestraURL) {
        this.orchestraURL = `${orchestraURL}/orchestras`
    }

    fetchOrchestras() {
        fetch(this.orchestraURL)
        .then(r => r.json())
        .then(orchestras => console.log(orchestras))
        .catch(err => console.warn(err))
    }

    editOrchestra(){
        fetch(`http://localhost:3000/orchestras/${editMode.dataset.id}`, {
            method: "PATCH",
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
            if (info.status === 204) {
                editMode.children[0].innerText = info.orchestra.name
                editMode = false
                document.getElementById("orchestra-submit").value = "Create Store"
                name.value = ""
            } else {
                alert(info.errors)
            }
        })
       .catch(err => console.error(err))
    }

}