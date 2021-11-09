export const createButton = (className, value, applicationModel) => {
    const button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('class', `menu-button ${className}`)
    button.setAttribute('value', value)
    button.addEventListener('click', () => {
        applicationModel.clickedButton = className
        console.log(applicationModel)
    })
    return button
}