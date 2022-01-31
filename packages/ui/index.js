import React from "react";
import ReactDOM from "react-dom";
import {Url} from './url';

function Main() {
    return <div>
        <h1>Analyze site sentiment!</h1>
        <Url />
    </div>
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Main />, mountNode);