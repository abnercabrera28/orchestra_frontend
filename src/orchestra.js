class Orchestra {

    static all = []

    constructor({id, name, instruments}) {
        this.id = id
        this.name = name
        this.instruments = instruments.map(i => new Instrument(i))
       
        Orchestra.all.push(this)
    }

    render(){
        return(`<li id="orchestra-${this.id}" data-id=${this.id}>
                <span>${this.name}</span> 
                <button data-action='display'>Display Instruments</button>
                <button data-action='edit'>Edit</button> 
                <button data-action='delete'>Delete</button>
            </li>`
        )
    }

    addToDom(){
        const orchestrasContainer = document.getElementById("orchestras-container");
        orchestrasContainer.innerHTML += this.render()
    }

    renderInstruments() {
        const li = document.getElementById(`orchestra-${this.id}`)
        const ul = document.createElement("ul")

        this.instruments.forEach(i => ul.innerHTML += i.render())
        li.append(ul)
        currentInstruments = ul    
        
    }

}