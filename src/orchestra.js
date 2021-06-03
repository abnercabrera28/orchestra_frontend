class Orchestra {

    static all = []

    constructor({id, name, instruments}) {
        this.id = id
        this.name = name
        this.instruments = instruments
       
        Orchestra.all.push(this)
    }

    render() {
        const orchestrasContainer = document.getElementById("orchestras-container")
        orchestrasContainer.innerHTML += `<li id="orchestra-${this.id}" data-id=${this.id}><span>${this.name}</span> <button data-action='edit'>Edit</button> <button data-action='delete'>Delete</button></li>`
    }

}