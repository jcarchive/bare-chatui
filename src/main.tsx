import {createRoot, Root} from "react-dom/client";
import {StrictMode} from "react";
import {App} from "./App";

import "normalize.css"
import "terminal.css";
import "./styles/main.css"

const appDomElement: HTMLElement = document.getElementById("root")
const root: Root = createRoot(appDomElement)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
