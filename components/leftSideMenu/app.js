import {createButton} from "./createButtons.js"

export const createLeftSideMenu = (applicationModel) => {
    const leftSideMenu = document.createElement('div')
        leftSideMenu.setAttribute ('class', 'left-side-menu-div')
    const sphereButton = createButton('sphere-button', 'Sphere', applicationModel)
    const workButton = createButton('work-button', 'Work', applicationModel)
    const sportButton = createButton('sport-button', 'Sport', applicationModel)
    const artButton = createButton('art-button', 'Art', applicationModel)
    const statisticButton = createButton('statistic-button', 'Statistic', applicationModel)
    leftSideMenu.append(sphereButton, workButton, sportButton, artButton, statisticButton)
    return leftSideMenu
}
