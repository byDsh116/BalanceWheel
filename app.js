import {createLeftSideMenu} from "./components/leftSideMenu/app.js";
import {createViewComponent} from "./components/viewComponent/app.js"
import {applicationModel} from "./components/applicationModel.js";

function initialise(){

    const rootDiv = document.getElementById('root')
    const leftSideMenu = createLeftSideMenu(applicationModel)
    const viewComponent = createViewComponent(applicationModel)
    rootDiv.append(leftSideMenu, viewComponent)
}

initialise()
