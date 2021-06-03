class Orchestra {

    static all = []

    constructor({id, name, instruments}) {
        this.id = id
        this.name = name
        this.instruments = instruments.map(i => new Instrument(i))
       
        Orchestra.all.push(this)
    }

    render(){
        return(`<li id="store-${this.id}" data-id=${this.id}>
                <span>${this.name}</span> 
                <button data-action='display'>Display Instruments</button>
                <button data-action='edit'>Edit</button> 
                <button data-action='delete'>Delete</button>
            </li>`
        )
    }

}