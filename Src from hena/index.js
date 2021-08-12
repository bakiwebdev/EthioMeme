import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./assets/bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/ionicons.min.css"
import store from "./redux/store"
import {Provider} from "react-redux"
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"))
