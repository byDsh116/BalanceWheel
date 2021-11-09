class applicationModel {
    constructor(clickedButton) {
        this.clickedButton = clickedButton
        this.handlers = []
    }
    setClickedButton(clickedButton) {
        this.clickedButton = clickedButton
    }
    getClickedButton() {
        return this.clickedButton
    }
    addNewHandler(handler) {
        this.handlers.push(handler)
    }
    executeHandlers() {
        this.handlers.forEach(handler => handler())
    }
}

export default applicationModel