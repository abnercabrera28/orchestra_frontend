class Orchestra {

    static all = []

    constructor({id, name, instruments}) {
        this.id = id
        this.name = name
        this.instruments = instruments
       
        Orchestra.all.push(this)
    }

}