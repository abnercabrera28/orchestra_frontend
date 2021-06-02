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

}