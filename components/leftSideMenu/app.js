import { createButton } from "./createButtons.js"

export const createLeftSideMenu = () => {
    const leftSideMenu = document.createElement('div')
    const sphereButton = createButton('sphere-button', 'Sphere')
    const workButton = createButton('work-button', 'Work')
    const sportButton = createButton('sport-button', 'Sport')
    const artButton = createButton('art-button', 'Art')
    const statisticButton = createButton('statistic-button', 'Statistic')
    leftSideMenu.append(sphereButton, workButton, sportButton, artButton, statisticButton)
    return leftSideMenu
}