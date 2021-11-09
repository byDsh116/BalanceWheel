export const  createViewComponent = (applicationModel) => { 
    const viewDiv = document.createElement('div')
    viewDiv.setAttribute('id', 'view-component-div')
    viewDiv.setAttribute('class', 'view-component-div')
viewDiv.innerText = applicationModel.clickedButton
    return viewDiv
}
