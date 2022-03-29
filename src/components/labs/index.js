import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import ToDoList from "./todo";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <ToDoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ReduxExamples/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <h1>Non React.js Assignments</h1>
            <ul>
                <li><a href="labs/a2/index.html">Assignment 2 Lab</a></li>
                <li><a href="labs/a2/index.html">Assignment 3 Lab</a></li>
                <li><a href="labs/a3/css/index.html">Assignment 3</a></li>
                <li><a href="labs/a4/bootstrap/index.html">Assignment 4</a></li>
                <li><a href="labs/a5/js/index.html">Assignment 5 Lab 1</a></li>
                <li><a href="labs/a5/todos/index.html">Assignment 5 Lab 2</a></li>

            </ul>

        </>

    )
};

export default Labs;
