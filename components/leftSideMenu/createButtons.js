export const createButton = (className, value) => {
    const button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('class', className)
    button.setAttribute('value', value)
    button.addEventListener('click', () => { alert('This is `${className}`')})
    return button
}