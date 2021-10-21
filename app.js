import { createLeftSideMenu } from "./components/leftSideMenu/app.js"

function initialise(){
    const rootDiv = document.getElementById('root')
    const leftSideMenu = createLeftSideMenu()
    rootDiv.append(leftSideMenu)
}

initialise()