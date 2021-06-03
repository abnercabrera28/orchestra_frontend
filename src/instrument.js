class Instrument {
    
    static all = []
    
    constructor({id, name, family, quantity, orchestra_id}) {
        this.id = id
        this.name = name
        this.family = family
        this.quantity = quantity
        this.orchestra_id = orchestra_id

        Instrument.all.push(this)
    }
}