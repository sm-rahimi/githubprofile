import React from "react";
import {render} from "react-dom";
// import { act } from "react-dom/test-utils";

import App from "./App";
import {BrowserRouter} from "react-router-dom";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

test("renders", () => {
    render(<BrowserRouter><App/></BrowserRouter>, container);
    expect(container.firstChild.classList.contains('App')).toBe(true);
    expect(container.getElementsByClassName("search-input")[0]).toBeInTheDocument();
    expect(container.getElementsByClassName("btn")[0]).toBeInTheDocument();
});