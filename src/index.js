let editMode = false
let currentInstruments = false
const orchestraAdapter = new OrchestraAdapter("http://localhost:3000")
const orchestraForm = new OrchestraForm

document.addEventListener("DOMContentLoaded", () => {
    orchestraForm.createForm();
    orchestraAdapter.fetchOrchestras();
    orchestraForm.listenEditDelete();
})

// function fetchOrchestras() {
//     const orchestrasContainer = document.getElementById("orchestras-container")
    
//     fetch("http://localhost:3000/orchestras")
//     .then(r => r.json())
//     .then(info => {
//         info.forEach(addOrchestra)
//     })
//     .catch(err => console.warn(err))
// }

// function createForm() {
//     const formContainer = document.getElementById("form-container")
//     const form = document.createElement("form")
//     form.innerHTML = `<input id="name-input" placeholder="Name" type="text"/><br><input id="orchestra-submit" value="Create Orchestra" type="submit"/>`
//     formContainer.append(form)

//     form.addEventListener("submit", handleSubmit)
// }

// function handleSubmit(event) {
//     event.preventDefault()
//     const name = event.target[0]
//     if (editMode) {
//         fetch(`http://localhost:3000/orchestras/${editMode.dataset.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify({
//                 name: name.value
//             })
//         })
//         .then(r => r.json())
//         .then(info => {
//             if (info.status === 204) {
//                 editMode.children[0].innerText = info.orchestra.name
//                 editMode = false
//                 document.getElementById("orchestra-submit").value = "Create Store"
//                 name.value = ""
//             } else {
//                 alert(info.errors)
//             }
//         })
//        .catch(err => console.error(err))
    
//     } else {
//         fetch("http://localhost:3000/orchestras", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             name: name.value
//         })
//     })
//     .then(r => r.json())
//     .then(info => { 
//         console.log(info)
//         if (info.status === 201) {
//             addOrchestra(info.orchestra)
//         } else {
//             alert(info.errors)
//         }
//         name.value = ""
// })
//     .catch(err => console.warn(err))
// }
// }

// function addOrchestra(orchestra) {
//     const orchestrasContainer = document.getElementById("orchestras-container")
//     orchestrasContainer.innerHTML += `<li id="orchestra-${orchestra.id}" data-id=${orchestra.id}><span>${orchestra.name}</span> <button data-action='edit'>Edit</button> <button data-action='delete'>Delete</button></li>`
// }

// function listenEditDelete() {
//     const orchestrasContainer = document.getElementById("orchestras-container")
//     orchestrasContainer.addEventListener("click", handleEditDelete)
// }

// function handleEditDelete(event) {
//     const li = event.target.parentElement
//     if (event.target.dataset.action === "delete") {
//         fetch(`http://localhost:3000/orchestras/${li.dataset.id}`, {
//             method: "DELETE"
//         })
//         .then(r => r.json())
//         .then(info => {
//             if (info.message === "Successfully deleted") {
//                 li.remove()
//             } else {
//                 alert(info.message)
//             }
//         })
//         .catch(err => console.error(err))
//     } else if (event.target.dataset.action === "edit") {
//         editMode = li
//         document.getElementById("orchestra-submit").value = "Update"
//         document.getElementById("name-input").value = li.children[0].innerText
//     }
// }
