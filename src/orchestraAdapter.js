class OrchestraAdapter {

    constructor(orchestraURL) {
        this.orchestraURL = `${orchestraURL}/orchestras`
    }

    fetchOrchestras() {
        fetch(this.orchestraURL)
        .then(r => r.json())
        .then(orchestras => {
            orchestras.forEach(orchestra => {
                const orch = new Orchestra(orchestra)
                orch.addToDom()
            })
        })
        .catch(err => console.warn(err))
    }

    createOrchestra(name){
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
            const orch = new Orchestra(info.orchestra)
            orch.addToDom()
        } else {
            alert(info.errors)
        }
        name.value = ""
    })
    .catch(err => console.warn(err))
}


    editOrchestra(editMode, name){
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
                document.getElementById("orchestra-submit").value = "Create Orchestra"
                name.value = ""
            } else {
                alert(info.errors)
            }
        })
       .catch(err => console.error(err))
    }

    deleteOrchestra(li) {
        fetch(`http://localhost:3000/orchestras/${li.dataset.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(info => {
            console.log(info)
            if (info.message === "Successfully deleted") {
                li.remove()
            } else {
                alert(info.message)
            }
        })
        .catch(err => console.error(err))
    }

}