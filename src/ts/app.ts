import '../style/style.scss'

// all images import './images/*' 

// dit is hetelfde als export function(). wordt aangeroepen in index.ts
// default zorgt dat je geen naam hoeft te geven, dat bepaal je in index.js

export default class App {
    constructor(){
        console.log("ok we're starting up....")
        let beemo = document.createElement("beemo")
        document.body.appendChild(beemo)
    }
}